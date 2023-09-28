const mongoose = require('mongoose');
const projectRoutes = require('./routes/project');

app.use('/api/project', projectRoutes);

mongoose.connect('mongodb://localhost:27017/yourDatabaseName', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB Connected'))
.catch(err => console.log(err));
