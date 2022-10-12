const User = require('../../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const postLogin = async (req, res) => {
	try {
		const { email, password } = req.body;

		// Check if user exists
		const user = await User.findOne({ email: email.toLowerCase() });

		if (!user) {
			return res.status(401).send('Invalid credentials');
		}

		// Check if password is correct
		const isPasswordCorrect = await bcrypt.compare(password, user.password);

		if (!isPasswordCorrect) {
			return res.status(401).send('Invalid credentials');
		}

		// Create JWT token
		const token = 'JWT TOKEN';

		// Send to client
		res.status(200).json({
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

module.exports = postLogin;
