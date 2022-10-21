const distModules = require('react-vertical-timeline-component/dist-modules');

const conenctedUsers = new Map();

const addNewConnectedUser = ({ socketId, userId }) => {
	conenctedUsers.set(socketId, { userId });
};

module.exports = {
	addNewConnectedUser,
};
