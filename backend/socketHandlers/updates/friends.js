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

const updateFriends = async (userId) => {
	try {
		//Check for active connections of the user
		const recieverList = serverStore.getActiveConnections(userId);

		if (recieverList.length > 0) {
			const user = await User.findById(userId, { _id: 1, friends: 1 }).populate(
				'friends',
				'_id username email'
			);

			if (user) {
				const friendsList = user.friends.map((friend) => {
					return {
						id: friend._id,
						username: friend.username,
						email: friend.email,
					};
				});

				const io = serverStore.getSocketServerInstance();

				//Send the friends list to the active connections
				recieverList.forEach((recieverSocketId) => {
					io.to(recieverSocketId).emit('friends-list', {
						friends: friendsList ? friendsList : [],
					});
				});
			}
		}
	} catch (error) {
		console.log(error);
	}
};
module.exports = { updateFriendsPendingInvitations, updateFriends };
