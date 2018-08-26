import React, { Component } from 'react';
import { ConverastionBox } from '../Components/ConversationBox';
import { Header } from '../Components/Header';
import './Conversations.css';

export class Conversations extends Component {
    constructor(props) {
        super(props)
        this.state = {
            newMessage: "",
            messages: [],
            friendName: null
        }
    }

    // Saves new message into the state
    handleMessageInputChange = (event) => {
        this.setState({newMessage: event.target.value})
    }

    // Renders all message history between selected users
    renderMessages = async () => {
        const conversationId = this.props.match.params.id
        const token = localStorage.getItem('token')
        const currentUser = localStorage.getItem('user')

        try {
            const listOfMessages = await fetch(`/api/rest/conversations/${conversationId}`, {
            method: 'GET',
            headers: {'Authorization':`Token ${token}`}
            })

            if (listOfMessages) {
                const listOfMessagesTransformed = await listOfMessages.json();

                const messages = listOfMessagesTransformed.messages.map( message => {
                    if (message.sender.name !== currentUser) {
                        this.setState({
                            friendName: message.sender.name
                        })
                    }
                    return (
                        <div className='conversations-item' key={message.text}>
                            <ConverastionBox
                                who={message.sender.name}
                                userName={currentUser}
                                messageText={message.text} />
                        </div>
                    )
                })
                this.setState({messages})
            } else {
                return <p>No messages found</p>
            }
        } catch (e) {
            console.log("Unable to get messages for user")
        }
    }

    async componentDidMount() {
        this.renderMessages()
    }

    // Uploads new message
    uploadMessage = async () => {
        const conversationId = this.props.match.params.id
        const token = localStorage.getItem('token')
        try {
                await fetch(`/api/rest/conversations/${conversationId}/`, {
                method: 'POST',
                headers: {'Content-Type': 'application/json', 'Authorization': `Token ${token}`},
                body: JSON.stringify({text: this.state.newMessage})
            })
            this.renderMessages()
        } catch (e) {
            console.log("Unable to upload message")
        }
    }

    render() {
        const friendName = this.state.friendName ? this.state.friendName : localStorage.getItem('friendName')
        return (
            <div className="wrapper">
                <Header
                    items={[
                        {title: 'Messages', path: '/messages'},
                        {title: 'Friends', path: '/friends'},
                        {title: 'Log Out', path: '/'}
                        ]}
                    {...this.props}/>
                <p className="conversations-header">Conversation with {friendName}</p>
                {this.state.messages}
                <div className="conversations-input-section">
                    <textarea
                        className="conversations-input"
                        value={this.state.newMessage}
                        placeholder="Write here your message..."
                        onChange={this.handleMessageInputChange}
                    />
                    <button
                        className="conversations-btn"
                        onClick={this.uploadMessage}
                    >Send Message</button>
                </div>
            </div>
        );
    }
}
