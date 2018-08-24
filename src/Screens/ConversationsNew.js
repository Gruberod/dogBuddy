import React, { Component } from 'react';
import { Header } from '../Components/Header';

export class ConversationsNew extends Component {
    constructor(props) {
        super(props)
        this.state = {
            newMessage: null,
            conversationId: null
        }
    }

    // Saves new message into state
    handleMessageInputChange = (event) => {
        this.setState({newMessage: event.target.value})
    }

    // Creates a new conversation thread with selected user if it doesn't exists already
    createConversation = async (friendId) => {
        const token = localStorage.getItem('token')

        const createResponse = await fetch('/api/rest/conversations/', {
            method: 'POST',
            headers: {'Content-Type': 'application/json', 'Authorization': `Token ${token}`},
            body: JSON.stringify({friend_id: friendId})
        })
        const response = await createResponse.json()

        this.setState({
            conversationId: response.id
        })
    }

    // Adds new message into created conversation
    uploadMessage = async () => {
        const conversationId = this.state.conversationId

        const token = localStorage.getItem('token')
        await fetch(`/api/rest/conversations/${conversationId}/`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json', 'Authorization': `Token ${token}`},
            body: JSON.stringify({text: this.state.newMessage})
        })
        this.props.history.push(`/conversations/${conversationId}/`)
    }

    handleButtonClick = async() => {
        await this.createConversation(this.props.match.params.friendId)
        this.uploadMessage()
    }

    render() {
        return (
            <div className="wrapper">
                <Header
                    items={[
                        {title: 'Messages', path: '/messages'},
                        {title: 'Friends', path: '/friends'},
                        {title: 'Log Out', path: '/'}
                        ]}
                    {...this.props}/>
                <p className="conversations-header">New conversation</p>
                <div className="conversations-input-section">
                    <textarea
                        className="conversations-input"
                        value={this.state.newMessage}
                        placeholder="Write here your message..."
                        onChange={this.handleMessageInputChange}
                    />
                    <button
                        className="conversations-btn"
                        onClick={() => this.handleButtonClick()}
                    >Send Message</button>
                </div>
            </div>
        );
    }
}
