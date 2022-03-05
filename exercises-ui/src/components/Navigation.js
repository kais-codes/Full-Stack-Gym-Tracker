import React from 'react';
import AddNewEntry from '../components/AddNew';
import HomeButton from './HomeButton';

function Navigation() {
    return (
        <>
            <HomeButton />
            <AddNewEntry />
        </>
    )
};

export default Navigation;