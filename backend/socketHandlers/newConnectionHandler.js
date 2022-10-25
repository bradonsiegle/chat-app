const serverStore = require('../serverStore');
const friendsUpdate = require('../socketHandlers/updates/friends');

const newConnectionHandler = async (socket, io) => {
	const { userId } = socket.user;

	serverStore.addNewConnectedUser({
		socketId: socket.id,
		userId: userId,
	});

	//Update pending invitations for the user
	friendsUpdate.updateFriendsPendingInvitations(userId);

	//Update friends list for the user
	friendsUpdate.updateFriends(userId);
};

module.exports = newConnectionHandler;
