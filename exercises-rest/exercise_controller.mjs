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

app.put('/exercises/:_id', (req, res) => {
    console.log(req.body);
    exercise.updateExercise(req.params._id, req.body.name, req.body.reps, req.body.weight, req.body.unit, req.body.date)
        .then(numUpdated => {
            if (numUpdated === 1) {
                res.status(200).json({ _id: req.body._id, name: req.body.name, reps: req.body.reps, weight: req.body.weight, unit: req.body.unit, date: req.body.date })
            } else {
                res.status(404).json({ Error: 'Resource not found'})
            }
        })
        .catch(error => {
            console.error(error);
            res.status(400).json({ Error: 'Request failed'})
        });
});

app.delete('/exercises/:_id', (req, res) => {
    exercise.removeExercise(req.params._id)
        .then(deletedCount => {
            if (deletedCount === 1) {
                res.status(204).send()
            } else {
                res.status(404).json({ Error: "Resource not found"});
            }
        })
        .catch(error => {
            console.error(error);
            res.send({ Error: 'Request failed'})
        });
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});