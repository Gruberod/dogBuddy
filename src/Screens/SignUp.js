import React, { Component } from 'react';
import { Header } from '../Components/Header';
import './SignUp.css';


export class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: null,
            userEmail: null,
            password: null,
            status: 200
        }
    }

    // Saves credentials into state
    handleNameInputChange = (event) => {
        this.setState({userName: event.target.value});
    }

    handleEmailInputChange = (event) => {
        this.setState({userEmail: event.target.value});
    }

    handlePasswordInputChange = (event) => {
        this.setState({password: event.target.value});
    }

    // Creates new user in DB
    signupUser = async () => {
        const {userName, userEmail, password} = this.state;
        const authResponse = await fetch('/api/rest/signup/', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({email: userEmail, password: password, name: userName})
        })

        this.setState({
            status: authResponse.status
        })
    }

    // Verify newly created user credentials -> this doesn't work! I am afraid token is not generated for new users...
    verifyCredentials = async () => {
        const {userName, password} = this.state;
        const authResponse = await fetch('/api/rest/authenticate/', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({username: userName, password: password})
        })

        this.setState({
            status: authResponse.status
        })

        const token = await authResponse.json();
        localStorage.setItem('token', token.token);
    }

    // Awaits creation of a new user, than verifies credentials and if everything goes well passes user into the app
    // in case of error, user is informed
    handleOnClickSignup = async() => {
        await this.signupUser()
        this.verifyCredentials()
        if (this.state.status === 200) {
            this.props.history.push(`/messages`)
        } else {
            return
        }
        this.props.history.push(`/messages`)
    }

    render() {
        const error = this.state.status === 200 ? <p></p> : <p>Sign up failed, please try again!</p>
        return (
            <div className="wrapper">
                <Header items={[{title: 'Login', path: '/'}, {title: 'Sign Up', path: '/signup'}]} {...this.props}/>
                <p className="signup-header">Sign Up for BasketFriends!</p>
                <p className="sub-header">Please enter your details</p>
                <input
                    className="input"
                    type="text"
                    name="name"
                    onChange={this.handleNameInputChange}
                    placeholder="*Your Name"/>
                <input
                    className="input"
                    type="email"
                    name="email"
                    onChange={this.handleEmailInputChange}
                    placeholder="*Your email address"/>
                <input
                    className="input"
                    type="password"
                    name="password"
                    onChange={this.handlePasswordInputChange}
                    placeholder="*Choose a password"/>
                {error}
                <button
                    className="signup-btn"
                    onClick={this.handleOnClickSignup}
                >Sign Up</button>
            </div>
        )
    }
}
