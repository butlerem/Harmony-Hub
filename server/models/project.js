const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    name: String,
    description: String,
    status: {
      type: String,
      enum: ['active', 'completed'],
      default: 'active'
    },
    tasks: [Object],
    comments: [Object],
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    members: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }],
  });

module.exports = mongoose.model('Project', projectSchema);
