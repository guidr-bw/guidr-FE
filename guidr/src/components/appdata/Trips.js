import React from 'react';
import { Link } from 'react-router-dom';

function Trips () {
    return(
        <div>
            <h2>Trips</h2>
            <Link to='/new-trip'>Add a new trip</Link>
            <section>
                <h2>Cambodia 2013</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
            </section>
        </div>
    )
}

export default Trips