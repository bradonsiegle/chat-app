const express = require('express');
const router = express.Router();
const authControllers = require('../controllers/auth/authControllers.js');
const Joi = require('joi');
const validator = require('express-joi-validation').createValidator({});
const auth = require('../middleware/auth');

const { postLogin, postRegister } = authControllers.controllers;

//validate requests
const registerSchema = Joi.object({
	username: Joi.string().min(3).max(16).required(),
	password: Joi.string().min(6).max(16).required(),
	email: Joi.string().email().required(),
});
const loginSchema = Joi.object({
	email: Joi.string().email().required(),
	password: Joi.string().min(6).max(16).required(),
});

//routes
router.post('/register', validator.body(registerSchema), postRegister);
router.post('/login', validator.body(loginSchema), postLogin);

//test route to verify middleware
router.get('/test', auth, (req, res) => {
	res.send('test route');
});

module.exports = router;
