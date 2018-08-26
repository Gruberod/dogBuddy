import React from 'react'
import { shallow, mount } from 'enzyme';
import { Messages } from './Messages'

describe('Conversation page', () => {
    let messages

    it('Should render Messages page with no messages', () => {
        // GIVEN
        messages = new Messages({
            messages: []
        })
        global.localStorage = {
            setItem: jest.fn(),
            getItem: jest.fn()
        }
        const history = {
            push: jest.fn()
        }
        const getMessagesForUser =  jest.fn()

        // WHEN
        const wrapper = shallow(
            <Messages
                history={history}
                getMessagesForUser={getMessagesForUser}
            />)
        const paragraphs = wrapper.find('p')
        const button = wrapper.find('button')
        const message = wrapper.find('Message')

        // THEN
        expect(paragraphs).toHaveLength(2)
        expect(button).toHaveLength(0)
        expect(message).toHaveLength(0)
    })
})
