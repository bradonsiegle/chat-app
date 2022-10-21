const User = require('../../models/user');
const FriendInvitation = require('../../models/friendInvitation');
const friendsUpdates = require('../../socketHandlers/updates/friends');

const postInvite = async (req, res) => {
	const { targetEmail } = req.body;

	const { userId, email } = req.user;

	//Check it is not a self invitation
	if (targetEmail.toLowerCase() === email.toLowerCase()) {
		return res.status(400).json({
			message: 'You cannot invite yourself',
		});
	}

	//Check if the user exists in the database
	const targetUser = await User.findOne({ email: targetEmail });

	if (!targetUser) {
		return res.status(404).json({
			message: 'This user does not exist',
		});
	}

	//Check if the invitation already exists
	const existingInvitation = await FriendInvitation.findOne({
		senderId: userId,
		receiverId: targetUser._id,
	});

	if (existingInvitation) {
		return res.status(400).json({
			message: 'An invitation has already been sent to this user',
		});
	}

	//Check if the user is already a friend
	const existingFriend = await targetUser.friends.find(
		(friendId) => friendId.toString() === userId.toString()
	);

	if (existingFriend) {
		return res.status(400).json({
			message: 'This user is already your friend',
		});
	}

	//Create the invitation
	const newInvitation = await FriendInvitation.create({
		senderId: userId,
		receiverId: targetUser._id,
	});

	//Send the invitation to the target user
	friendsUpdates.updateFriendsPendingInvitations(targetUser._id.toString());

	return res.status(201).send('Invitation sent');
};

module.exports = postInvite;
