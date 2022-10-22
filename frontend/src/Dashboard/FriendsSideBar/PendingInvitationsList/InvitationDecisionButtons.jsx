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
				gap: '1rem',
			}}
		>
			<IconButton
				style={{ color: 'green', padding: '0.8rem' }}
				onClick={acceptFriendInvitation}
			>
				<CheckIcon
					sx={{
						fontSize: '2rem',
					}}
				/>
			</IconButton>
			<IconButton
				style={{ color: 'red', padding: '0.8rem' }}
				onClick={rejectFriendInvitation}
			>
				<CloseIcon
					sx={{
						fontSize: '2rem',
					}}
				/>
			</IconButton>
		</Box>
	);
};
