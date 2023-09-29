const mongoose = require('mongoose');

/**
 * connects to a MongoDB database.
 */
mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/HarmonyHub'
    );

module.exports = mongoose.connection;