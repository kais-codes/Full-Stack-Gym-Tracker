import React from 'react';
import Exercise from './Exercise';

function MovieList({ exercises, onDelete }) {
    return (
        <table id='exericses'>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Reps</th>
                    <th>Weight</th>
                    <th>Unit</th>
                    <th>Date</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {exercises.map((exercise, i) => <Exercise exercise={exercise} key={i} onDelete={onDelete}/>)}            
            </tbody>   
        </table>       
    );
};


export default MovieList;