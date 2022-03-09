import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function EditExercisePage ({ exerciseToEdit }) {

    const [name, setName] = useState(exerciseToEdit.name);
    const [reps, setReps] = useState(exerciseToEdit.reps);
    const [weight, setWeight] = useState(exerciseToEdit.weight);
    const [unit, setUnit] = useState(exerciseToEdit.unit);
    const [date, setDate] = useState(exerciseToEdit.date);

    const history = useHistory();

    const editExercise = async () => {
        const editedExercise = {name, reps, weight, unit, date};
        const response = await fetch(`/exercises/${exerciseToEdit._id}`, { method: "PUT", body: JSON.stringify(editedExercise), headers: {'Content-Type': "application/json"} });
        if (response.status === 200) {
            alert('Successfully edited the exercise entry')
        } else {
            alert(`Failed to edit exercise entry. Status code: ${response.status}`)
        }
        history.push('/');
    };

    return (
        <div>
            <h1>Edit Exercise Entry</h1>
            <input
            type="text"
            value={name}
            onChange={exercise => setName(exercise.target.value)} />
            <input
            type="text"
            value={reps}
            onChange={exercise => setReps(exercise.target.value)} />
            <input
            type="text"
            value={weight}
            onChange={exercise => setWeight(exercise.target.value)} />
            <select value={unit} placeholder="Units" onChange={exercise => setUnit(exercise.target.value)}>\
                <option value=' '> </option>
                <option value='lbs'>lbs</option>
                <option value="kg">kg</option>
            </select>
            <input
            type="text"
            value={date}
            onChange={exercise => setDate(exercise.target.value)} />
            <button
                onClick={editExercise}>Save Changes</button>
        </div>
    );
};

export default EditExercisePage;