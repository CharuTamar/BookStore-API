const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 9000;


// Database connection
mongoose.connect(process.env.MONGODB_URI);

const db = mongoose.connection;
db.on('error', (err) => {
    console.error(err)
});
db.once('open', () => {
  console.log('MongoDB connection ready!')
});


app.use(express.json());

const bookRoutes = require('./routes/books.router');
app.use('/books', bookRoutes);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));