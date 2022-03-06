import React from 'react';
import AddNewEntry from '../components/AddNew';
import HomeButton from './HomeButton';

function Navigation() {
    return (
        <article>
            <HomeButton/>
            <AddNewEntry/>
        </article>
    )
};

export default Navigation;