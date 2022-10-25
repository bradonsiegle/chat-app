import { styled } from '@mui/system';
import { FriendsListItem } from '../index';
import { useSelector } from 'react-redux';

const MainContainer = styled('div')({
	flexGrow: 1,
	width: '100%',
});

export const FriendsList = () => {
	const friends = useSelector((state) => state.friends.friends);
	return (
		<MainContainer>
			{friends.map((friend) => (
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
