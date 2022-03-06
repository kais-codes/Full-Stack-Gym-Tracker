import React from 'react';
import Exercise from './Exercise';

function MovieList({ exercises, onDelete, onEdit }) {
    return (
        <table className="centered">
            <caption>
                Here are your logged exercises
            </caption>
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
                {exercises.map((exercise, i) => <Exercise exercise={exercise} key={i} onDelete={onDelete} onEdit={onEdit}/>)}            
            </tbody>   
        </table>       
    );
};


export default MovieList;