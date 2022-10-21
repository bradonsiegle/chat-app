import { styled } from '@mui/system';
import { PendingInvitationsListItem } from './PendingInvitationsListItem';
import { useSelector } from 'react-redux';

const MainContainer = styled('div')({
	width: '100%',
	marginBottom: '1rem',
});

export const PendingInvitationsList = () => {
	const pendingFriendsInvitations = useSelector(
		(state) => state.friends.pendingFriendsInvitations
	);
	return (
		<MainContainer>
			{pendingFriendsInvitations.map((invitation) => (
				<PendingInvitationsListItem
					key={invitation._id}
					id={invitation._id}
					username={invitation.senderId.username}
					email={invitation.senderId.email}
				/>
			))}
		</MainContainer>
	);
};
