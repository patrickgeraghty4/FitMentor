// server/controllers/mentorController.js
const Mentor = require('../models/mentorModel');

// Get all mentors
const getAllMentors = async (req, res) => {
  try {
    const mentors = await Mentor.find();
    res.json(mentors);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Add a new mentor
const addMentor = async (req, res) => {
  const { name, expertise, bio, rating } = req.body;
  const newMentor = new Mentor({ name, expertise, bio, rating });

  try {
    await newMentor.save();
    res.status(201).json(newMentor);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { getAllMentors, addMentor };
