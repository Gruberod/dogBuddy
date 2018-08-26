import React, { Component } from 'react'
import './ConverastionBox.css'

export class ConverastionBox extends Component {
    // Two versions of message boxes
    render() {
        const messageBoxMe = () => {
            return (
            <div className="align-right">
                <div className="conversation-box-me">
                    <p className="text-me">{this.props.messageText}</p>
                </div>
                <div className="arrow-right"></div>
                <p className="user-name-me">{this.props.who}</p>
            </div>
            )}

        const messageBoxFriend = () => {
            return (
            <div className="align-left">
                <p className="user-name-friend">{this.props.who}</p>
                <div className="arrow-left"></div>
                <div className="conversation-box-friend" >
                    <p className="text-friend">{this.props.messageText}</p>
                </div>
            </div>
            )}

        // Decides which kind of box should returm based on sender
        const boxStyle = this.props.who === this.props.userName ? messageBoxMe() : messageBoxFriend()

        return (
            <div>
                {boxStyle}
            </div>
        )
    }
}
