import React from 'react';
import { Link } from 'react-router-dom';
import { MdPlusOne } from 'react-icons/md'

function AddNewEntry() {
    return(
        <Link to='/create-exercise'><MdPlusOne/></Link>
    )
};

export default AddNewEntry