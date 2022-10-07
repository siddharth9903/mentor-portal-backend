const express = require('express')
const mentorRouter = express.Router()
const { getAllMentors, getMentorById,addMentorwithId } = require('../controller/mentorsController')

mentorRouter.get('/', getAllMentors);
mentorRouter.get('/mentor/:mentorId', getMentorById);
mentorRouter.post('/addmentor/:id', addMentorwithId);
module.exports = mentorRouter ;