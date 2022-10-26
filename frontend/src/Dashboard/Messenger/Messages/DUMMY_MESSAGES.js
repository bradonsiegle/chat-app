const DUMMY_MESSAGES = [
	{
		_id: 1,
		content: 'Hello, how are you?',
		sameAuthor: false,
		author: {
			username: 'John',
		},
		date: '26/10/2022',
		sameDay: false,
	},
	{
		_id: 2,
		content: 'Hello again!',
		sameAuthor: true,
		author: {
			username: 'John',
		},
		date: '26/10/2022',
		sameDay: true,
	},
	{
		_id: 3,
		content: 'Hello a third time!',
		sameAuthor: true,
		author: {
			username: 'John',
		},
		date: '26/10/2022',
		sameDay: true,
	},
	{
		_id: 4,
		content: 'This is a response!',
		sameAuthor: false,
		author: {
			username: 'Jane',
		},
		date: '26/10/2022',
		sameDay: true,
	},
	{
		_id: 5,
		content: 'This is a second response!',
		sameAuthor: true,
		author: {
			username: 'Jane',
		},
		date: '27/10/2022',
		sameDay: false,
	},
];

export default DUMMY_MESSAGES;
