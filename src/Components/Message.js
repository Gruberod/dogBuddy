import React, { Component } from 'react'
import './Message.css'

export class Message extends Component {
    // Box for displaying last message detail

    render() {
            const path = this.props.messagePath
        // const messageMobile = () => {
        //     return (
        //         <div className="message-wrappe-mobiler">
        //             <div className="name-mobile">{this.props.name}</div>
        //             <div className="message-mobile">
        //                 <p className="message-text-mobile">{this.props.messageText}</p>
        //                 <button
        //                     className="message-btn-mobile"
        //                     onClick={() => this.props.history.push(path)}
        //                 >Reply</button>
        //             </div>
        //         </div>
        //     )}

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
