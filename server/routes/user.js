const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../models/User');

// Register a new user
router.post('/register', async (req, res) => {
  const { username, password } = req.body;
  try {
    const newUser = new User({ username, password }); // Assuming password hashing in User model
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get all projects for a user
router.get('/:userId/projects', async (req, res) => {
  try {
    const user = await User.findById(req.params.userId).populate('projects');
    res.json(user.projects);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
