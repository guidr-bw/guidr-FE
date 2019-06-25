import React from 'react';
import { Route } from 'react-router-dom';

import LoginForm from './LoginForm';
import CreateForm from './CreateForm';

function LoginRoute () {
    return(
        <div>
            <Route exact path='/' component={LoginForm} />
            <Route path='/create-account' component={CreateForm} />
        </div>
    )
}

export default LoginRoute