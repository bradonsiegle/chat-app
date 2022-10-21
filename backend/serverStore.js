const conenctedUsers = new Map();

let io = null;

const setSocketServerInstance = (ioInstance) => {
	io = ioInstance;
};

const getSocketServerInstance = () => {
	return io;
};

const addNewConnectedUser = ({ socketId, userId }) => {
	conenctedUsers.set(socketId, { userId });
	console.log('conenctedUsers', conenctedUsers);
};

const removeConnectedUser = (socketId) => {
	if (conenctedUsers.has(socketId)) {
		conenctedUsers.delete(socketId);
	}
	console.log('conenctedUsers', conenctedUsers);
};

const getActiveConnections = (userId) => {
	const activeConnections = [];

	conenctedUsers.forEach((value, key) => {
		if (value.userId === userId) {
			activeConnections.push(key);
		}
	});

	return activeConnections;
};

module.exports = {
	addNewConnectedUser,
	removeConnectedUser,
	getActiveConnections,
	setSocketServerInstance,
	getSocketServerInstance,
};
