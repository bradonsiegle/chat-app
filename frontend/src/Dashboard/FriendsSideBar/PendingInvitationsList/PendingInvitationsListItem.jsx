import { useState } from 'react';
import Typography from '@mui/material/Typography';
import { Avatar } from '../../../shared/components';
import Button from '@mui/material/Button';
import { PendingInvitationsDialog } from './PendingInvitationsDialog';

export const PendingInvitationsListItem = ({
	id,
	username,
	email,
	acceptFriendInvitation = () => {
		console.log('acceptFriendInvitation');
	},
	rejectFriendInvitation = () => {
		console.log('rejectFriendInvitation');
	},
}) => {
	const handleAcceptFriendInvitation = () => {
		acceptFriendInvitation({ id });
	};

	const handleRejectFriendInvitation = () => {
		rejectFriendInvitation({ id });
	};

	const handleOpenDialog = () => {
		setIsDialogOpen(true);
	};

	const handleCloseDialog = () => {
		setIsDialogOpen(false);
	};

	const [isDialogOpen, setIsDialogOpen] = useState(false);

	return (
		<div style={{ width: '100%' }}>
			<Button
				style={{
					width: '100%',
					height: '3rem',
					marginTop: '0.5rem',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'flex-start',
					textTransform: 'none',
					color: 'black',
					position: 'relative',
				}}
				onClick={() => handleOpenDialog()}
			>
				<Avatar username={username} />
				<Typography
					style={{ marginLeft: '0.5rem', fontWeight: 700, color: '#8e9297' }}
					variant='subtitle1'
					align='left'
				>
					{username}
				</Typography>
			</Button>
			<PendingInvitationsDialog
				isDialogOpen={isDialogOpen}
				closeDialogHandler={handleCloseDialog}
				username={username}
				email={email}
				acceptFriendInvitation={handleAcceptFriendInvitation}
				rejectFriendInvitation={handleRejectFriendInvitation}
			/>
		</div>
	);
};
