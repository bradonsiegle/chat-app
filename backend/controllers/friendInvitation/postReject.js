const FriendInvitation = require('../../models/friendInvitation');
const friendsUpdates = require('../../socketHandlers/updates/friends');

const postReject = async (req, res) => {
	try {
		const { id } = req.body;
		const { userId } = req.user;

		//Check if the invitation exists
		const invitation = await FriendInvitation.exists({ _id: id });
		if (!invitation) {
			return res.status(404).json({ message: 'Invitation not found' });
		}

		//Delete the invitation
		await FriendInvitation.findByIdAndDelete(id);

		//Update pending invitations
		friendsUpdates.updateFriendsPendingInvitations(userId);

		return res.status(200).send('Invitation successfully rejected');
	} catch (error) {
		console.log(error);
		res.status(500).send('Something went wrong, please try again later');
	}
};

module.exports = postReject;
