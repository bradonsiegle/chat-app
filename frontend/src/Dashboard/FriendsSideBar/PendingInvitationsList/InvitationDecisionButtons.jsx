import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';

export const InvitationDecisionButtons = ({
	acceptFriendInvitation,
	rejectFriendInvitation,
}) => {
	return (
		<Box
			sx={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				gap: '1.6rem',
			}}
		>
			<IconButton
				style={{ color: 'green', padding: '0' }}
				onClick={acceptFriendInvitation}
			>
				<CheckIcon />
			</IconButton>
			<IconButton
				style={{ color: 'red', padding: '0' }}
				onClick={rejectFriendInvitation}
			>
				<CloseIcon />
			</IconButton>
		</Box>
	);
};
