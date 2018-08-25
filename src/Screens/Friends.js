import React, { Component } from 'react';
import { Header } from '../Components/Header';
import './Friends.css'

export class Friends extends Component {
    constructor(props) {
        super(props)
        this.state = {
            friends: []
        }
    }

    async componentDidMount() {
        const token = localStorage.getItem('token')

        // Lists friend available for user
        try {
            const getFriendsForUser = await fetch('/api/rest/friends/', {
                method: 'GET',
                headers: {'Authorization': `Token ${token}`}
            });
            const friendsForUser = await getFriendsForUser.json();
            this.setState({
                friends: friendsForUser
            })
        } catch (e) {
            console.log("Unable to get friends")
        }
    }

    // Redirects for new conversation thread where user can add message
    checkForConversation = async (friendId, friendName) => {
        localStorage.setItem('friendName', friendName);
        this.props.history.push(`conversations/new/${friendId}`)
    }

    render() {
        const listOfFriends = this.state.friends.map(friend => {
            console.log(friend.id)
            return (
                <div className="friends-box" key={friend.id}>
                    <p className="friends-name">{friend.name}</p>
                    <button
                        className="friends-btn"
                        onClick={() => this.checkForConversation(friend.id, friend.name)}
                    >Send Message</button>
                </div>
            )
        })

        return (
            <div className="wrapper">
                <Header
                    items={[
                        {title: 'Messages', path: '/messages'},
                        {title: 'Friends', path: '/friends'},
                        {title: 'Log Out', path: '/'}
                    ]}
                    {...this.props}/>
                <p className="friends-header">Friends</p>
                {listOfFriends}
            </div>
        )
    }
}

