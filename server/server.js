// server/server.js
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
app.use(express.json());

// MongoDB connection (use your own MongoDB URI in .env file)
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Sample route for testing
app.get('/', (req, res) => {
  res.send("Welcome to FitMentor API");
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
// server/server.js
const mentorRoutes = require('./routes/mentorRoutes');

app.use('/api', mentorRoutes);
