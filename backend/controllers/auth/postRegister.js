const User = require('../../models/user');
const bcrypt = require('bcryptjs');

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
		const token = 'JWT TOKEN';

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
