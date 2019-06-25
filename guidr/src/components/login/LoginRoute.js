import React from 'react';
import { Route } from 'react-router-dom';

import LoginForm from './LoginForm';
import CreateForm from './CreateForm';
import CreateProfile from './CreateProfile';

function LoginRoute () {
    return(
        <div>
            <Route exact path='/' component={LoginForm} />
            <Route path='/create-account' component={CreateForm} />
            <Route path='/create-profile' component={CreateProfile} />
        </div>
    )
}

export default LoginRoute