const express = require('express');

const router = express.Router();
const Workout = require('../models/workoutModel')

const {createWorkout, getWorkouts, getWorkout, deleteWorkout, updateWorkout} = require('../Controllers/workoutController')
// To Get All Workouts 
router.get('/', getWorkouts)

// To get a single Workout
router.get('/:id', getWorkout)


// To Create New Workout
router.post('/', createWorkout)

// To Update a single Workout
router.patch('/:id', updateWorkout)


// To Delete a single Workout
router.delete('/:id', deleteWorkout)


module.exports = router;