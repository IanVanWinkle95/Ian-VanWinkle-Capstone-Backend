const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const pricesRoutes = require('./routes/pricesRoutes')

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/api', pricesRoutes)

mongoose.connect('mongodb+srv://ianvanwinkle:Chase.007@icv.t9qjp.mongodb.net/')
.then(() => {
  console.log('MongoDB connected');
})
.catch(err => {
  console.error('Error connecting to MongoDB', err);
});

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/api/test', (req, res) => {
  res.json({ message: 'Backend is working!' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});