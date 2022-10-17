const jwt = require('jsonwebtoken');

const config = process.env;

const verifyTokenSocket = (socket, next) => {
	const token = socket.handshake.auth?.token;
	if (!token) {
		return next(new Error('Authentication error'));
	}
	try {
		const decoded = jwt.verify(token, config.JWT_SECRET);
		socket.user = decoded;
		next();
	} catch (err) {
		return next(new Error('Authentication error'));
	}

	next();
};

module.exports = verifyTokenSocket;
