import { useState, useEffect } from 'react';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import { validateEmail } from '../../shared/utils/validators';
import { CustomPrimaryButton, InputWithLabel } from '../../shared/components';

import { useDispatch } from 'react-redux';
import { sendFriendInvitation } from './../../store/actions/friendsActions';

export const AddFriendDialog = ({ isDialogOpen, closeDialogHandler }) => {
	const dispatch = useDispatch();
	const [email, setEmail] = useState('');
	const [isFormValid, setIsFormValid] = useState(false);

	const handleSendInvitation = () => {
		dispatch(
			sendFriendInvitation({
				email,
			})
		);
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
					ADD FRIEND
				</DialogTitle>
				<DialogContent>
					<DialogContentText
						sx={{
							color: 'white',
							m: 0,
							p: 1,
						}}
					>
						Enter the email address of the person you want to invite.
					</DialogContentText>
					<InputWithLabel
						label='Email'
						value={email}
						setValue={setEmail}
						onChange={(e) => setEmail(e.target.value)}
						type='text'
					/>
				</DialogContent>
				<DialogActions>
					<CustomPrimaryButton
						onClick={handleSendInvitation}
						disabled={!isFormValid}
						label='Send'
						additionalStyles={{
							width: '90%',
							margin: 'auto',
							color: 'white',
							marginBottom: '1rem',
						}}
					/>
				</DialogActions>
			</Dialog>
		</div>
	);
};
