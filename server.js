const mongoose = require('mongoose');
const app = require('./app');

mongoose.connect('mongodb://127.0.0.1:27017/taskdb')
    .then(() => {
        console.log('Connected to MongoDB');
        app.listen(5000, () => console.log('Server running on port 5000'));
    })
    .catch(err => console.error('Failed to connect to MongoDB', err));
