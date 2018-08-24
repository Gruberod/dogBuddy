import React, { Component } from 'react';
import { Message } from '../Components/Message';
import { Header } from '../Components/Header';
import './Messages.css'


export class Messages extends Component {
    constructor(props) {
        super(props)
        this.state = {
            messages: []
        }
    }

    async componentDidMount() {
        const token = localStorage.getItem('token')

        const getMessagesForUser = await fetch('/api/rest/conversations/', {
            method: 'GET',
            headers: {'Authorization':`Token ${token}`}
        });
        const messagesForUser = await getMessagesForUser.json();

        if (messagesForUser !== undefined) {
            const messages = messagesForUser.map(message => {
                if (!message.last_message) {
                    return
                }
                return (
                    <Message
                        key={message.id}
                        messageText={message.last_message.text}
                        name={message.last_message.sender.name}
                        messagePath={`/conversations/${message.id}`}
                        {...this.props}
                    />
                )
            })
            this.setState({messages})
        }
    }

    render() {
        // Informs user in case there are no messages to display
        const messages = (this.state.messages.length === 0) ? <p>You have no messages</p> : this.state.messages

        return (
            <div className="wrapper">
                <Header items={[
                    {title: 'Messages', path: '/messages'},
                    {title: 'Friends', path: '/friends'},
                    {title: 'Log Out', path: '/'}
                    ]}
                    {...this.props}/>
                <p className="messages-header">Messages</p>
                {messages}
            </div>
        )
    }
}
