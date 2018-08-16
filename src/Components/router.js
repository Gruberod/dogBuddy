import * as React from 'react'

import { Login } from '../Screens/Login'
import { SignUp } from '../Screens/SignUp'
import { Messages } from '../Screens/Messages'
import {Conversations} from '../Screens/Conversations'

import {Route} from 'react-router-dom'


export const Router = () => (
    <div>
        <Route exact path='/' component={Login}/>
        <Route exact path='/signup' component={SignUp}/>
        <Route exact path='/messages' component={Messages}/>
        <Route exact path='/conversations' component={Conversations}/>
    </div>
)
