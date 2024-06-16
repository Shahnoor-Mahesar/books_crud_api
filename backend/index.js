const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port =3000;

// Middleware
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(
    "mongodb+srv://shahnoor:mjneUBlmvBC9WOO8@nodeapi.xpthjpj.mongodb.net/database?retryWrites=true&w=majority&appName=nodeapi"
  )
  .then(() => {
    console.log("Connected to database!");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch(err => {
    console.error('Error connecting to MongoDB Atlas:', err.message);
    console.error(err.stack); // Print stack trace for detailed information
  });;

// Routes
const bookRoutes = require('./routes/books');
app.use('/api/books', bookRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
