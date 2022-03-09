import React from 'react';
import ExerciseList from '../components/ExerciseList';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';


function HomePage({ setExerciseToEdit }) {

    const [exercises, setExercise] = useState([]);

    const loadExercises = async () => {
        const response = await fetch('/exercises');
        const exercises = await response.json();
        setExercise(exercises)
    };

    useEffect(() => {
        loadExercises();
    }, []);

    const history = useHistory();

    const onEdit = exercise => {
        setExerciseToEdit(exercise);
        history.push('/edit-exercise')
    };

    const onDelete = async (_id) => {
        const response = await fetch(`/exercises/${_id}`, {method: "DELETE"});
        if (response.status === 204){
            const newExercise = exercises.filter(exercise => exercise._id !== _id);
            setExercise(newExercise)
        } else{
            console.error(`Failed exercise delete request for _id=${_id}, error code = ${response.status}`);
        };
    };

    return (
        <ExerciseList exercises={exercises} onDelete={onDelete} onEdit={onEdit}></ExerciseList>
    );
};

export default HomePage;