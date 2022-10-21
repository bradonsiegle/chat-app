const FriendInvitation = require('../../models/friendInvitation');
const serverStore = require('../../serverStore');
const User = require('../../models/user');

const updateFriendsPendingInvitations = async (userId) => {
	try {
		const pendingInvitations = await FriendInvitation.find({
			receiverId: userId,
		}).populate('senderId', '_id username email');

		//Check for active connections of the user
		const recieverList = serverStore.getActiveConnections(userId);

		const io = serverStore.getSocketServerInstance();

		//Send the pending invitations to the active connections
		recieverList.forEach((recieverSocketId) => {
			io.to(recieverSocketId).emit('friends-invitations', {
				pendingInvitations: pendingInvitations ? pendingInvitations : [],
			});
		});
	} catch (error) {
		console.log(error);
	}
};

module.exports = { updateFriendsPendingInvitations };
