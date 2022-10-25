const FriendInvitation = require('../../models/friendInvitation');
const User = require('../../models/user');
const friendsUpdates = require('../../socketHandlers/updates/friends');

const postAccept = async (req, res) => {
	try {
		const { id } = req.body;

		//Check if the invitation exists
		const invitation = await FriendInvitation.findById(id);
		if (!invitation) {
			return res.status(404).json({ message: 'Invitation not found' });
		}

		const { senderId, receiverId } = invitation;

		//Add to eachother's friends list
		const sender = await User.findById(senderId);
		const reciever = await User.findById(receiverId);
		sender.friends.push(receiverId);
		reciever.friends.push(senderId);
		await sender.save();
		await reciever.save();

		//Delete the invitation
		await FriendInvitation.findByIdAndDelete(id);

		//Update pending invitations
		friendsUpdates.updateFriendsPendingInvitations(receiverId.toString());

		return res.status(200).send('Friend has been added, congratulations!');
	} catch (error) {
		console.log(error);
		res.status(500).send('Something went wrong, please try again later');
	}
};

module.exports = postAccept;
