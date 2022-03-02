import * as exercise from './exercise_model.mjs';
import express from 'express';

const app = express();
const PORT = 3000;

app.use(express.json());

app.post('/exercises', (req, res) => {
    console.log(req.body);
    exercise.createExercise(req.body.name, req.body.reps, req.body.weight, req.body.unit, req.body.date)
        .then(exercise => {
            res.status(201).json(exercise);
        })
        .catch(error => {
            console.error(error);
            res.status(400).json({ Error: 'Request failed' });
        });
});

app.get('/exercises', (req, res) => {
    let filter = {};
    exercise.retrieveExercises(filter, '', 0)
        .then(exercise => {
            res.json(exercise);
        })
        .catch(error => {
            console.error(error)
            res.status(400).json({ Error: 'Request failed'});
        });
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});