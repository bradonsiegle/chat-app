import { styled } from '@mui/system';
import { FriendsListItem } from '../index';
import { useSelector } from 'react-redux';

const MainContainer = styled('div')({
	flexGrow: 1,
	width: '100%',
});

const checkOnlineUsers = (friends = [], onlineUsers = []) => {
	friends.forEach((friend) => {
		const isOnline = onlineUsers.find((user) => user.userId === friend.id);
		friend.isOnline = isOnline ? true : false;
	});
	return friends;
};

export const FriendsList = () => {
	const friends = useSelector((state) => state.friends.friends);
	const onlineUsers = useSelector((state) => state.friends.onlineUsers);
	return (
		<MainContainer>
			{checkOnlineUsers(friends, onlineUsers).map((friend) => (
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
