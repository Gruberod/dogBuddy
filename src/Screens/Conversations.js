import React, { Component } from 'react';
import {ConverastionBox, ConversationBox} from '../Components/ConversationBox';
import './Conversations.css';


export class Conversations extends Component {
    render() {
        return (
            <div className="wrapper">
                <p className="conversations-header">Conversation with Someone</p>
                <div className="conversations-item">
                    <ConverastionBox who="user"/>
                </div>
                <div className="conversations-item">
                    <ConverastionBox who="Alex"/>
                </div>
                <div className="conversations-input-section">
                    <input className="conversations-input" type="text" name="conversation" placeholder="Write here your message..."/>
                    <button className="conversations-btn">Send Message</button>
                </div>
            </div>
        );
    }
}
