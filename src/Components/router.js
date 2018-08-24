import * as React from 'react'

import Login from '../Screens/Login'
import { SignUp } from '../Screens/SignUp'
import { Messages } from '../Screens/Messages'
import {Conversations} from '../Screens/Conversations'
import {ConversationsNew} from '../Screens/ConversationsNew'
import {Friends} from '../Screens/Friends'

import {Route} from 'react-router-dom'


export const Router = () => (
    // Basic navigation throughout the app
    <div>
        <Route exact path='/' component={Login}/>
        <Route exact path='/signup' component={SignUp}/>
        <Route exact path='/messages' component={Messages}/>
        <Route exact path='/conversations/:id' component={Conversations}/>
        <Route exact path='/conversations/new/:friendId' component={ConversationsNew}/>
        <Route exact path='/friends' component={Friends}/>
    </div>
)
