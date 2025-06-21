const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const taskRoutes = require('./routes/taskRoutes');

const app = express();

app.use(cors());
app.use(express.json()); // ✅ Add this to parse JSON request bodies

app.use('/api/tasks', taskRoutes);

mongoose.connect('mongodb://127.0.0.1:27017/taskdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log('Connected to MongoDB');
    app.listen(5000, () => console.log('Server running on port 5000'));
})
.catch(err => console.log(err));
