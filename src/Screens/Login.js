import React, {Component} from 'react'
import { Header } from '../Components/Header'
import './Login.css';


export class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: 'abel@dogbuddy.io',
            password: '123qweasd',
            status: 200
        }
    }

    // Saves credential into state
    handleNameInputChange = (event) => {
        this.setState({userName: event.target.value});
    }

    handlePasswordInputChange = (event) => {
        this.setState({password: event.target.value});
    }

    // Verifying credentials against backend DB
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

        // Saves token into local storage to make it available throughout the app until user logs out
        localStorage.setItem('token', token.token);

        const getCurrentUser = await fetch('/api/rest/user/', {
            method: 'GET',
            headers: {'Authorization':`Token ${token.token}`}
        })
        const currentUser = await getCurrentUser.json();

        // Saves current user into local storage to make it available throughout the app until user logs out
        localStorage.setItem('user', currentUser.name);

    }

    // Handle invalid credentials case
    handleOnClickLogin = async() => {
        await this.verifyCredentials()
        if (this.state.status === 200) {
            this.props.history.push(`/messages`)
        } else {
            return
        }
    }

    render() {
        // Ensures user is informed in case of validation issue
        const error = this.state.status === 200 ? <p></p> : <p>Invalid credentials, please try again!</p>
        return (
            <div className="wrapper">
                <Header items={[{title: 'Login', path: '/'}, {title: 'Sign Up', path: '/signup'}]} {...this.props} />
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
                    type="password"
                    name="password"

                    placeholder="Enter password"
                    onChange={this.handlePasswordInputChange}/>
                {error}
                <button
                    type='button'
                    className="login-btn"
                    onClick={this.handleOnClickLogin}
                >
                    Log In
                </button>
            </div>
        )
    }
}

export default Login
