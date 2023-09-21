const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    role: {
      type: String,
      default: 'user',
      enum: ['user', 'admin']
    },
    avatar: String,
    projects: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Project'
    }]
  });

module.exports = mongoose.model('User', userSchema);
