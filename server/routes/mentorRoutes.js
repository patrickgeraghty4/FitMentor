// server/routes/mentorRoutes.js
const express = require('express');
const { getAllMentors, addMentor } = require('../controllers/mentorController');
const router = express.Router();

// Route to get all mentors
router.get('/mentors', getAllMentors);

// Route to add a new mentor
router.post('/mentors', addMentor);

module.exports = router;
