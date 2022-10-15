import { styled } from '@mui/system';
import { AddFriendButton } from './AddFriendButton';
import { FriendsTitle } from './FriendsTitle';

const MainContainer = styled('div')({
	width: '13rem',
	height: '100%',
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	backgroundColor: '#2F3136',
});

export const FriendsSideBar = () => {
	return (
		<MainContainer>
			<AddFriendButton />
			<FriendsTitle title='Private Messages' />
			<FriendsList />
			<FriendsTitle title='Invitations' />
			<PendingInvitationsList />
		</MainContainer>
	);
};
