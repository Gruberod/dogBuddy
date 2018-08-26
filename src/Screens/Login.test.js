import React from 'react'
import { shallow, mount } from 'enzyme';
import { Login } from './Login'

describe('Login page', () => {

    it('Should render Login page', () => {
        // WHEN
        const wrapper = shallow(<Login history={history} />)
        const paragraphs = wrapper.find('p')
        const button = wrapper.find('button')
        const inputs = wrapper.find('input')

        // THEN
        expect(paragraphs).toHaveLength(3)
        expect(button).toHaveLength(1)
        expect(inputs).toHaveLength(2)
    })

    it('should verify correct user credential', async () => {
        global.localStorage = {
            setItem: jest.fn()
        }
        const history = {
            push: jest.fn()
        }

        // GIVEN
        const correctCredentials = {
            "body": "{\"username\":\"abel@dogbuddy.io\",\"password\":\"123qweasd\"}",
            "headers": {
                "Content-Type": "application/json"
            },
            "method": "POST"
        }

        const mockResponse = {
            status: 200,
            json: () => Promise.resolve(correctCredentials)
        }

        global.fetch = jest.fn().mockImplementation(() => {
            return new Promise((resolve, reject) => resolve(mockResponse))
        })

        // WHEN
        const wrapper = mount(<Login history={history} />)
        const paragraphs = wrapper.find('p')
        await wrapper.instance().handleOnClickLogin()

        // THEN
        expect(global.fetch).toBeCalledWith('/api/rest/authenticate/', correctCredentials)
        expect(paragraphs.at(2).text()).toBe("")
        expect(history.push).toBeCalledWith('/messages')
    })

    it('should verify incorrect user credential', async () => {
        global.localStorage = {
            setItem: jest.fn()
        }
        const history = {
            push: jest.fn()
        }

        // GIVEN
        const invalidCredentials = {
            "body": "{\"username\":\"random@test.io\",\"password\":\"password\"}",
            "headers": {
                "Content-Type": "application/json"
            },
            "method": "POST"
        }

        const mockResponse = {
            status: 400,
            json: () => Promise.resolve(invalidCredentials)
        }

        global.fetch = jest.fn().mockImplementation(() => {
            return new Promise((resolve, reject) => resolve(mockResponse))
        })

        // WHEN
        const wrapper = mount(<Login history={history} />)
        const paragraphs = wrapper.find('p')
        wrapper.setState({
            userName:"random@test.io",
            password: "password",
        })
        await wrapper.instance().handleOnClickLogin()

        // THEN
        expect(global.fetch).toBeCalledWith('/api/rest/authenticate/', invalidCredentials)
        expect(history.push).toHaveBeenCalledTimes(0)
        expect(paragraphs.at(2).text()).toBe("Invalid credentials, please try again!")
    })
})
