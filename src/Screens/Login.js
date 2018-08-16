import React, {Component} from 'react';
import './Login.css';


export class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userName: 'alcot@dogbuddy.io',
            password: '123qweasd'
        }
    }

    handleNameInputChange = (event) => {
        this.setState({userName: event.target.value});
    }

    handlePasswordInputChange = (event) => {
        this.setState({password: event.target.value});
    }

    verifyCredentials = async () => {
        const {userName, password} = this.state
        const authResponse = await fetch('/api/rest/authenticate/', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({username: userName, password: password})})

        const token = await authResponse.json()
        localStorage.setItem('token', token.token)
        console.log("token-----------" + token.token)
        try {
            const meResponse = await fetch('/api/rest/user/', {
                method: 'GET',
                headers: {'Authorization':`Token${{token}}`}
            })
            const me = await meResponse.json()
            console.log("response-------------"+ authResponse)
            console.log(me)
        } catch (e) {
            console.log(e)
        }

    }

    render() {
        return (
            <div className="wrapper">
                <p className="login-header">Welcome back!</p>
                <p className="sub-header">Please Login</p>
                <input
                    className="input"
                    type="text"
                    name="name"
                    placeholder="Enter email address"
                    onChange={this.handleNameInputChange}/>
                <input
                    className="input"
                    type="text"
                    name="password"
                    placeholder="Enter password"
                    onChange={this.handlePasswordInputChange}/>
                <button
                    className="login-btn"
                    onClick={this.verifyCredentials}>Login
                </button>
            </div>
        );
    }
}
