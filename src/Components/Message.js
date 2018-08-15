import React, { Component } from 'react';
import './Message.css'


export class Message extends Component {
    render() {
        return (
            <div className="message-wrapper">
                <div className="name">Abel</div>
                <div className="message">
                    <p className="message-text">Some lorem ypsum Some lorem ypsum Some lorem ypsum Some lorem ypsum Some lorem ypsum Some lorem ypsum Some lorem ypsum Some lorem ypsum Some lorem ypsum</p>
                    <button className="message-btn">Reply</button>
                </div>
            </div>
        );
    }
}
