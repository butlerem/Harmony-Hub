const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  role: { type: String, default: 'user', enum: ['user', 'admin'] },
  avatar: String,
  projects: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Project' }]
});

// Hash the password before saving it to the database
userSchema.pre('save', async function (next) {
  if (this.isModified('password') || this.isNew) {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
  }
  next();
});

module.exports = mongoose.model('User', userSchema);
