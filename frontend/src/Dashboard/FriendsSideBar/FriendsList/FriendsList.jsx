import { styled } from '@mui/system';
import { FriendsListItem } from '../index';

const DUMMY_FRIENDS = [
	{
		id: '1',
		username: 'John',
		isOnline: true,
	},
	{
		id: '2',
		username: 'Jane',
		isOnline: false,
	},
	{
		id: '3',
		username: 'Jack',
		isOnline: true,
	},
	{
		id: '4',
		username: 'Jill',
		isOnline: false,
	},
];

const MainContainer = styled('div')({
	flexGrow: 1,
	width: '100%',
});

export const FriendsList = () => {
	return (
		<MainContainer>
			{DUMMY_FRIENDS.map((friend) => (
				<FriendsListItem
					key={friend.id}
					id={friend.id}
					username={friend.username}
					isOnline={friend.isOnline}
				/>
			))}
		</MainContainer>
	);
};
