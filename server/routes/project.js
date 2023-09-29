const express = require('express');
const router = express.Router();
const Project = require('../models/Project');

router.post('/create', async (req, res) => {
  try {
    const newProject = new Project(req.body);
    const savedProject = await newProject.save();
    res.json(savedProject);
  } catch (err) {
    res.status(500).json(err);
  }
});

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

// Delete Project
router.delete('/:id', async (req, res) => {
  try {
    await Project.findByIdAndRemove(req.params.id);
    res.json({ message: 'Project deleted' });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
