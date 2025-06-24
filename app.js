const express = require('express');
const mongoose = require('mongoose');
const taskRoutes = require('./routes/taskRoutes');

const app = express();

app.use(express.json());
app.use('/tasks', taskRoutes);

module.exports = app;
