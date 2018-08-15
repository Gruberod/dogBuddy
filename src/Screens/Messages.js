import React, { Component } from 'react';
import { Message } from '../Components/Message';
import './Messages.css'


export class Messages extends Component {
    render() {
        return (
            <div className="wrapper">
                <p className="messages-header">Messages</p>
                <Message/>
                <Message/>
            </div>
        )
    }
}
