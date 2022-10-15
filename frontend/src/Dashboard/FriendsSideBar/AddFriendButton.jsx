import { CustomPrimaryButton } from './../../shared/components/';

const additionalStyles = {
	marginTop: '1rem',
	width: '80%',
	height: '2rem',
	backgroundColor: '#3ba55d',
};

export const AddFriendButton = () => {
	const handleOpenAddFriendDialog = () => {};

	return (
		<>
			<CustomPrimaryButton
				additionalStyles={additionalStyles}
				label='Add Friend'
				onClick={handleOpenAddFriendDialog}
			/>
		</>
	);
};
