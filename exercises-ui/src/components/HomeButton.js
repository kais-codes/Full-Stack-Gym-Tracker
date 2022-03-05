import React from 'react';
import { Link } from 'react-router-dom';
import { MdHome } from 'react-icons/md'

function HomeButton() {
    return(
        <Link to='/'><MdHome/></Link>
    )
};

export default HomeButton