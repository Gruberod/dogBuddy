import React, { Component } from 'react';
import './ConverastionBox.css'


export class ConverastionBox extends Component {


    render() {
        const boxStyle = this.props.who === "user" ? "conversation-box-me" : "conversation-box-other"
        const textStyle = this.props.who === "user" ? "text-me" : "text-other"
        const alignment = this.props.who === "user" ? "align-right" : "align-left"


        return (
            <div className={alignment}>
                <p className="user-name">{this.props.who}</p>
                <div className={boxStyle}>
                    <p className={textStyle}>Bacon ipsum dolor amet spare ribs sirloin tenderloin, short ribs ground round tongue pork loin jerky. Pig porchetta bacon ball tip fatback. Drumstick sirloin cupim fatback tail, jowl ribeye rump corned beef venison turkey chuck salami tri-tip boudin. Meatloaf ham bacon ham hock short ribs turkey turducken chicken beef rump venison andouille tongue jerky.</p>
                </div>
            </div>
        );
    }
}
