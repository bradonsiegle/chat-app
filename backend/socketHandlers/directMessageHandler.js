const Message = require('../models/message');
const Conversation = require('../models/conversation');
const chatUpdates = require('./updates/chat');

const directMessageHandler = async (socket, data) => {
	try {
		const { userId } = socket.user;
		const { content, receiverUserId } = data;

		// Create a new message
		const message = await Message.create({
			content: content,
			authorId: userId,
			date: new Date(),
			type: 'DIRECT',
		});

		// Find if a conversation exists between the two users
		const conversation = await Conversation.findOne({
			participants: {
				$all: [userId, receiverUserId],
			},
		});

		// If a conversation exists, add the message to the conversation
		if (conversation) {
			conversation.messages.push(message._id);
			await conversation.save();

			// Emit the message to the sender and receiver if they are online
			chatUpdates.updateChatHistory(conversation._id.toString());
		}
		// If a conversation does not exist, create a new conversation
		else {
			const newConversation = await Conversation.create({
				participants: [userId, receiverUserId],
				messages: [message._id],
			});
			// Emit the message to the sender and receiver if they are online
			chatUpdates.updateChatHistory(newConversation._id.toString());
		}
	} catch (error) {
		console.log('an error occurred in directMessageHandler: ', error);
	}
};

module.exports = directMessageHandler;
