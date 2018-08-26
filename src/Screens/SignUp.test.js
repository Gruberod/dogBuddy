import React from 'react'
import { shallow, mount } from 'enzyme';
import { SignUp } from './SignUp'

describe('Sign Up page', () => {

    it('Should render SignUp page', () => {
        // WHEN
        const wrapper = shallow(<SignUp history={history} />)
        const paragraphs = wrapper.find('p')
        const button = wrapper.find('button')
        const inputs = wrapper.find('input')

        // THEN
        expect(paragraphs).toHaveLength(3)
        expect(button).toHaveLength(1)
        expect(inputs).toHaveLength(3)
    })

    it('should create new user', () => {
        global.localStorage = {
            setItem: jest.fn()
        }
        const history = {
            push: jest.fn()
        }
        const testUser = {
            email:"test@test.com",
            password:"test123",
            name:"test user"
        }

        // GIVEN
        const userDetails = {
            "body": "{\"email\":\"test@test.com\",\"password\":\"test123\",\"name\":\"test user\"}",
            "headers": {
                "Content-Type": "application/json"
            },
            "method": "POST"
        }

        const mockResponse = {
            status: 200,
            json: () => Promise.resolve(userDetails)
        }

        global.fetch = jest.fn().mockImplementation(() => {
            return new Promise((resolve, reject) => resolve(mockResponse))
        })

        // WHEN
        const wrapper = mount(<SignUp history={history} />)
        const paragraphs = wrapper.find('p')
        wrapper.setState({
            userEmail:"test@test.com",
            password: "test123",
            userName: "test user"
        })
        wrapper.instance().signupUser(testUser)


        // THEN
        expect(global.fetch).toBeCalledWith('/api/rest/signup/', userDetails)
        expect(paragraphs.at(2).text()).toBe("")
    })
})
