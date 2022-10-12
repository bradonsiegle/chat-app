const jwt = require('jsonwebtoken');
const User = require('../models/user');

const config = process.env;

const checkToken = (req, res, next) => {
	let token = req.body.token || req.query.token || req.headers['authorization'];

	if (!token) {
		return res.status(403).send({
			success: false,
			message: 'No token provided',
		});
	}

	try {
		token = token.replace('Bearer ', '');
		const decoded = jwt.verify(token, config.JWT_SECRET);
		req.user = decoded;
	} catch (err) {
		return res.status(401).json({ message: 'Invalid token' });
	}
};
