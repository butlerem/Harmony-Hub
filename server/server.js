const express = require('express');
const app = express();
const mongoose = require('mongoose');
const projectRoutes = require('./routes/project');

app.use(express.json()); // For parsing JSON request body
app.use('/api/project', projectRoutes);

mongoose.connect('mongodb://localhost:27017/harmonyHubDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB Connected'))
.catch(err => console.log(err));

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
