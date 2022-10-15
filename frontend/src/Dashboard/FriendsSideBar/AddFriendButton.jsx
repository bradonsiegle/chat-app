import { useState } from 'react';
import { CustomPrimaryButton } from './../../shared/components/';
import { AddFriendDialog } from './index';

const additionalStyles = {
	marginTop: '1rem',
	width: '80%',
	height: '2rem',
	backgroundColor: '#3ba55d',
};

export const AddFriendButton = () => {
	const [isDialogOpen, setIsDialogOpen] = useState(false);

	const handleOpenAddFriendDialog = () => {
		setIsDialogOpen(true);
	};

	const handleCloseAddFriendDialog = () => {
		setIsDialogOpen(false);
	};

	return (
		<>
			<CustomPrimaryButton
				additionalStyles={additionalStyles}
				label='Add Friend'
				onClick={handleOpenAddFriendDialog}
			/>
			<AddFriendDialog
				isDialogOpen={isDialogOpen}
				closeDialogHandler={handleCloseAddFriendDialog}
			/>
		</>
	);
};
