import mongoose from 'mongoose';

mongoose.connect(
    'mongodb://localhost:27017/exercises',
    { useNewUrlParser: true }
);

const db = mongoose.connection;

db.once('open', () => {
    console.log('Successfully connected to MongoDB using Mongoose.')
});

const exerciseSchema = mongoose.Schema({
    name: { type: String, required: true },
    reps: { type: Number, required: true },
    weight: { type: Number, required: true },
    unit: { type: String, required: true },
    date: { type: String, required: true }
});

const Exercise = mongoose.model("Exercise", exerciseSchema);

const createExercise = async (name, reps, weight, unit, date) => {
    const exercise = new Exercise({ 
        name: name,
        reps: reps,
        weight: weight,
        unit: unit,
        date, date 
    });
    return exercise.save()
};

const retrieveExercises = async (filter, projection, limit) => {
    const query = Exercise.find(filter)
        .select(projection)
        .limit(limit);
    return query.exec()
}

export { createExercise, retrieveExercises };