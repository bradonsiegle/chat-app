const User = require('../../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const postRegister = async (req, res) => {
	try {
		const { username, email, password } = req.body;

		// Check if user already exists
		const alreadyExists = await User.findOne({ email: email.toLowerCase() });
		if (alreadyExists) {
			return res.status(409).send('Email address is already in use');
		}

		//Hash password
		const hashedPassword = await bcrypt.hash(password, 10);

		// Create new user in database
		const user = await User.create({
			username,
			email: email.toLowerCase(),
			password: hashedPassword,
		});

		//Create JWT token
		const token = jwt.sign(
			{
				userId: user._id,
				email: user.email,
			},
			process.env.JWT_SECRET,
			{
				expiresIn: '7d',
			}
		);

		// Send to client
		res.status(201).json({
			userDetails: {
				username: user.username,
				email: user.email,
				token: token,
			},
		});
	} catch (err) {
		console.log(err);
		return res.status(500).json({ message: 'Internal server error' });
	}
};

module.exports = postRegister;
