import { styled } from '@mui/system';
import { PendingInvitationsListItem } from './PendingInvitationsListItem';

const DUMMY_INVITATIONS = [
	{
		_id: 1,
		senderId: {
			username: 'John',
			email: 'John@gmail.com',
		},
	},
	{
		_id: 2,
		senderId: {
			username: 'Jane',
			email: 'Jane@gmail.com',
		},
	},
	{
		_id: 3,
		senderId: {
			username: 'Jack',
			email: 'Jack@gmail.com',
		},
	},
];

const MainContainer = styled('div')({
	width: '100%',
	marginBottom: '1rem',
});

export const PendingInvitationsList = () => {
	return (
		<MainContainer>
			{DUMMY_INVITATIONS.map((invitation) => (
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
