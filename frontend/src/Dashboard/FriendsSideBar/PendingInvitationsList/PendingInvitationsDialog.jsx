import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Typography from '@mui/material/Typography';

import { InvitationDecisionButtons } from './InvitationDecisionButtons';

import { Avatar } from '../../../shared/components';

export const PendingInvitationsDialog = ({
	isDialogOpen,
	closeDialogHandler,
	username,
	email,
	acceptFriendInvitation,
	rejectFriendInvitation,
}) => {
	const handleCloseDialog = () => {
		closeDialogHandler();
	};

	return (
		<div>
			<Dialog
				PaperProps={{
					style: {
						backgroundColor: '#2f3136',
						color: '#dcddde',
					},
				}}
				open={isDialogOpen}
				onClose={handleCloseDialog}
				style={{
					backgroundColor: 'rgba(0, 0, 0, 0.5)',
				}}
			>
				<DialogTitle
					sx={{
						m: 0,
						p: 2,
						textAlign: 'center',
						color: 'white',
					}}
				>
					Incoming Friend Request
				</DialogTitle>
				<DialogContent>
					<div
						style={{
							display: 'flex',
							width: '100%',
							justifyContent: 'center',
							alignItems: 'center',
							padding: '1rem 0',
						}}
					>
						<Avatar username={username} />
						<DialogContentText
							sx={{
								color: 'white',
								marginLeft: '0.5rem',
								marginRight: '1rem',
								p: 1,
							}}
						>
							{username} ( {email} )
						</DialogContentText>
						<DialogActions
							sx={{
								p: 0,
								m: 0,
							}}
						>
							<InvitationDecisionButtons
								acceptFriendInvitation={acceptFriendInvitation}
								rejectFriendInvitation={rejectFriendInvitation}
							/>
						</DialogActions>
					</div>
				</DialogContent>
			</Dialog>
		</div>
	);
};
