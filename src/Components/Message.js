import React, { Component } from 'react'
import './Message.css'

export class Message extends Component {
    // Box for displaying last message detail

    render() {
            const path = this.props.messagePath
        return (
            <div className="message-wrapper">
                <div className="name">{this.props.name}</div>
                <div className="message">
                    <p className="message-text">{this.props.messageText}</p>
                    <button
                        className="message-btn"
                        onClick={() => this.props.history.push(path)}
                    >Reply</button>
                </div>
            </div>
        )
    }
}
