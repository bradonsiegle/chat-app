import io from 'socket.io-client';
import {
	setPendingFriendInvitations,
	setFriends,
} from '../store/actions/friendsActions';
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
		store.dispatch(setPendingFriendInvitations(pendingInvitations));
	});

	socket.on('friends-list', (data) => {
		const { friends } = data;
		store.dispatch(setFriends(friends));
	});
};
