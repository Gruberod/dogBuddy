import React, { Component } from 'react';
import './Login.css';


export class Login extends Component {
    render() {
        return (
            <div className="wrapper">
                <p className="login-header">Welcome back!</p>
                <p className="sub-header">Please Login</p>
                <input className="input" type="text" name="name" placeholder="Enter email address"/>
                <input className="input" type="text" name="password" placeholder="Enter password"/>
                <button className="login-btn">Login</button>
            </div>
        );
    }
}
