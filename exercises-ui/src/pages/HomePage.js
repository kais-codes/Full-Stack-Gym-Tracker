import React from 'react';
import ExerciseList from '../components/ExerciseList';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function HomePage() {

    const [exercises, setExercise] = useState([]);

    const loadExercises = async () => {
        const response = await fetch('/exercises');
        const exercises = await response.json();
        setExercise(exercises)
    };

    useEffect(() => {
        loadExercises();
    }, []);

    const onDelete = async (_id) => {
        const response = await fetch(`/exercises/${_id}`, {method: "DELETE"});
        if (response.status === 204){
            const newExercise = exercises.filter(exercise => exercise._id !== _id);
            setExercise(newExercise)
        } else{
            console.error(`Failed exercise delete request for _id=${_id}, error code = ${response.status}`);
        };
    }

    return (
        <>
        <ExerciseList exercises={exercises} onDelete={onDelete}></ExerciseList>
        <Link to='/create-exercise'>Log a new exercise</Link>
        </>
    )
};

export default HomePage;