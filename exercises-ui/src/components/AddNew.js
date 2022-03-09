import React from 'react';
import { Link } from 'react-router-dom';
import { HiPlus } from 'react-icons/hi';

function AddNewEntry() {
    return(
        <Link to='/create-exercise' className='iconSize'><HiPlus/></Link>
    );
};

export default AddNewEntry;