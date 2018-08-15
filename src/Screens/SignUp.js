import React, { Component } from 'react';
import './SignUp.css';


export class SignUp extends Component {
    render() {
        return (
            <div className="wrapper">
                <p className="signup-header">Sign Up for BasketFriends!</p>
                <p className="sub-header">Please enter your details</p>
                <input className="input" type="text" name="name" placeholder="*Your Name"/>
                <input className="input" type="text" name="email" placeholder="*Your email address"/>
                <input className="input" type="text" name="password" placeholder="*Choose a password"/>
                <button className="signup-btn">Sign Up</button>
            </div>
        );
    }
}
