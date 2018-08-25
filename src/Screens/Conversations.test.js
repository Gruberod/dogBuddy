import React from 'react'
import { shallow, mount } from 'enzyme';
import { Conversations } from './Conversations'

describe('Conversation page', () => {

    it('Should render Conversations page', () => {
        // when
        const wrapper = shallow(<Conversations history={history} />)
        const paragraphs = wrapper.find('p')
        const button = wrapper.find('button')
        const inputs = wrapper.find('input')
        const conversationBox = wrapper.find('ConversationBox')

        // then
        expect(paragraphs).toHaveLength(1)
        expect(button).toHaveLength(1)
        expect(inputs).toHaveLength(1)
        expect(conversationBox).toHaveLength(1)
    })

    it('should verify user credential', () => {
        global.localStorage = {
            setItem: jest.fn()
        }
        const history = {
            push: jest.fn()
        }

        // // GIVEN
        // const credentials = {
        //     "body": "{\"username\":\"abel@dogbuddy.io\",\"password\":\"123qweasd\"}",
        //     "headers": {
        //         "Content-Type": "application/json"
        //     },
        //     "method": "POST"
        // }
        //
        // const expectedOptions = {
        // }
        //
        // const mockResponse = {
        //     status: 200,
        //     json: () => Promise.resolve(credentials)
        // }
        //
        // global.fetch = jest.fn().mockImplementation(() => {
        //     return new Promise((resolve, reject) => resolve(mockResponse))
        // })
        //
        // // WHEN
        // const wrapper = mount(<Login history={history} />)
        // wrapper.instance().handleOnClickLogin()
        //
        // // THEN
        // expect(global.fetch).toBeCalledWith('/api/rest/authenticate/', credentials)
        // expect(history.push).notToBeCalled
        // // expect(history.push).toBeCalledWith('/messages')
    })
})
