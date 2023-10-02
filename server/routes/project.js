const express = require('express');
const router = express.Router();
const Project = require('../models/Project');
const User = require('../models/User');

// Create Project and Add to User
router.post('/create', async (req, res) => {
  try {
    const newProject = new Project(req.body.project);
    const savedProject = await newProject.save();

    // Add project to user
    const user = await User.findById(req.body.userId);
    user.projects.push(savedProject);
    await user.save();

    res.json(savedProject);
  } catch (err) {
    res.status(500).json(err);
  }
});

<<<<<<< HEAD
=======
// List All Projects
router.get('/list', async (req, res) => {
  try {
    const projects = await Project.find({});
    res.json(projects);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get Single Project
router.get('/:id', async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    res.json(project);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Update Project
router.put('/:id', async (req, res) => {
  try {
    const updatedProject = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedProject);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Delete Project and Remove from User
router.delete('/:id', async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    await project.remove();

    // Remove project from user
    const user = await User.findById(req.body.userId);
    const index = user.projects.indexOf(req.params.id);
    if (index > -1) {
      user.projects.splice(index, 1);
    }
    await user.save();

    res.json({ message: 'Project deleted' });
  } catch (err) {
    res.status(500).json(err);
  }
});

>>>>>>> 45a61b87387a0c168ec19fdab8daaec51eca4eb3
module.exports = router;
