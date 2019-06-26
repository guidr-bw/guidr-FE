import React from 'react';
import { Route } from 'react-router-dom';

import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import CreateProfile from './CreateProfile';

function LoginRoute () {
    return(
        <div>
            <Route exact path='/' component={LoginForm} />
            <Route path='/create-account' component={RegisterForm} />
            <Route path='/create-profile' component={CreateProfile} />
        </div>
    )
}

export default LoginRoute

// [ 
//     { username: "backpackHero",
//     password:"1234"}, 
//     { username: "scubascuba",
//     password:"1234"}, 
//     { username: "gr8Guide",
//     password:"1234"}
//     ]