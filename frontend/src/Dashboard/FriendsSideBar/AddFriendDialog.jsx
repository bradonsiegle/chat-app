import { useState, useEffect } from 'react';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Typography from '@mui/material/Typography';

import { validateEmail } from '../../shared/utils/validators';
import { InputWithLabel } from '../../shared/components';

export const AddFriendDialog = ({
	isDialogOpen,
	closeDialogHandler,
	sendFriendInvitation = () => {},
}) => {
	const [email, setEmail] = useState('');
	const [isFormValid, setIsFormValid] = useState(false);

	const handleSendInvitation = () => {
		//send friend request to server
	};

	const handleCloseDialog = () => {
		closeDialogHandler();
		setEmail('');
	};

	useEffect(() => {
		setIsFormValid(validateEmail(email));
	}, [email, setIsFormValid]);

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
					<Typography>ADD FRIEND</Typography>
				</DialogTitle>
				<DialogContent>
					<DialogContentText>
						<Typography
							sx={{
								color: 'white',
								m: 0,
								p: 1,
							}}
						>
							Enter the email address of the person you want to invite.
						</Typography>
					</DialogContentText>
					<InputWithLabel
						label='Email'
						value={email}
						setValue={setEmail}
						onChange={(e) => setEmail(e.target.value)}
						type='text'
					/>
				</DialogContent>
			</Dialog>
		</div>
	);
};
