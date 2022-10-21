import io from 'socket.io-client';
import { setPendingFriendInvitations } from '../store/actions/friendsActions';
import { store } from '../store/store';

const URL = 'http://localhost:5002';

let socket = null;

export const connectWithSocketServer = (userDetails) => {
	socket = io(URL, {
		auth: {
			token: userDetails.token,
		},
	});

	socket.on('connect', () => {
		console.log('connected to socket server');
		console.log('socket id:', socket.id);
	});

	socket.on('friends-invitations', (data) => {
		const { pendingInvitations } = data;
		console.log('friends invitations event received');
		console.log('pendingInvitations', pendingInvitations);

		store.dispatch(setPendingFriendInvitations(pendingInvitations));
	});
};
