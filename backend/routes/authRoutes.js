const express = require('express');
const router = express.Router();
const authControllers = require('../controllers/auth/authControllers.js');
const Joi = require('joi');
const validator = require('express-joi-validation').createValidator({});

const { postLogin, postRegister } = authControllers.controllers;

//validate requests
const registerSchema = Joi.object({
	username: Joi.string().min(3).max(12).required(),
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

module.exports = router;
