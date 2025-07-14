const express = require('express');
const Entry = require('../models/Entry');

const router = express.Router();

// GET all entries
router.get('/', async (req, res) => {
  try {
    const entries = await Entry.find().sort({ date: 1 });
    res.json(entries);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST new entry
router.post('/', async (req, res) => {
  const { date, calories, sleep, workouts } = req.body;

  const newEntry = new Entry({
    date,
    calories,
    sleep,
    workouts,
    heartRate: 72,  // default value or can be added to form
    steps: 5000     // same here
  });

  try {
    const savedEntry = await newEntry.save();
    res.status(201).json(savedEntry);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
