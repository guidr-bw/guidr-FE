import React from 'react';
import { Link, NavLink } from 'react-router-dom'

import'./AppLink.scss'

function AppLink () {
    return(
        <nav>
            <NavLink className='navLink' activeClassName='active' to='/app/profile'>Profile</NavLink>
            <NavLink className='navLink' activeClassName='active' to='/app/trips'>Trips</NavLink>
            <Link className='navLink' to='/'>Sign Out</Link>
        </nav>
    )
}

export default AppLink;