import io from 'socket.io-client';
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
};
