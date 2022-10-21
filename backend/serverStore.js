const conenctedUsers = new Map();

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

module.exports = {
	addNewConnectedUser,
	removeConnectedUser,
};
