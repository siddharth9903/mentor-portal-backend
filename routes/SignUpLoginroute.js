const express = require('express')
const signupLoginRoute = express.Router();
const { signUp } = require('../controller/signUpLoginController');

signupLoginRoute.post('/signup', signUp);


module.exports=signupLoginRoute
