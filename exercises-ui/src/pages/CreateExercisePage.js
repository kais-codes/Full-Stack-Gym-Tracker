import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function CreateExercisePage() {

    const [name, setName] = useState('')
    const [reps, setReps] = useState('')
    const [weight, setWeight] = useState('')
    const [unit, setUnit] = useState('')
    const [date, setDate] = useState('')

    const history = useHistory()

    const logExercise = async () => {
        const newExercise = {name, reps, weight, unit, date};
        const response = await fetch('/exercises', { method: "POST", body: JSON.stringify(newExercise), headers: {'Content-Type': "application/json"} });
        if (response.status === 201) {
            alert('Sucessfully logged new entry')
        }else {
            alert(`Failed to log exercise, state code: ${response.status}`);
        }
        history.push('/') 
    };
    return (
        <div>
            <h1>Log an Exercise</h1>
            <input 
            type="text"
            placeholder='Name'
            value={name}
            onChange={exercise => setName(exercise.target.value)} />
            <input 
            type="text"
            placeholder='Reps'
            value={reps}
            onChange={exercise => setReps(exercise.target.value)} />
            <input 
            type="text"
            placeholder='Weight'
            value={weight}
            onChange={exercise => setWeight(exercise.target.value)} />
            <select onChange={exercise => setUnit(exercise.target.value)}>
                <option value=""> </option>
                <option value='lbs'>lbs</option>
                <option value="kg">kg</option>
            </select>
            <input 
            type="text"
            placeholder='Date'
            value={date}
            onChange={exercise => setDate(exercise.target.value)} />
            <button
                onClick={logExercise}> Create Log </button>          
        </div>
    );
};

export default CreateExercisePage