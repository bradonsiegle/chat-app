import { useState } from 'react';
import { useSelector } from 'react-redux';
import { styled } from '@mui/system';
import { sendDirectMessage } from '../../realtimeCommunication/socketConnection';

const MainContainer = styled('div')({
	height: '4rem',
	width: '100%',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
});

const Input = styled('input')({
	width: '96%',
	height: '3.4rem',
	padding: '0 0.8rem',
	marginBottom: '1.5rem',
	backgroundColor: '#2f3136',
	border: 'none',
	color: 'white',
	fontSize: '1rem',
	borderRadius: '0.5rem',
	':focus': {
		outline: 'none',
		border: '1px solid #7289da',
	},
});

export const NewMessageInput = () => {
	const [message, setMessage] = useState('');

	const chosenChatDetails = useSelector(
		(state) => state.chat.chosenChatDetails
	);

	const handleMessageValueChange = (e) => {
		setMessage(e.target.value);
	};

	const handleKeyPressed = (e) => {
		if (e.key === 'Enter') {
			handleSendMessage();
		}
	};

	const handleSendMessage = () => {
		if (message.length > 0) {
			sendDirectMessage({
				receiverUserId: chosenChatDetails.id,
				content: message,
			});
			setMessage('');
		}
	};

	return (
		<MainContainer>
			<Input
				placeholder={`Message @${chosenChatDetails?.name}`}
				value={message}
				onChange={handleMessageValueChange}
				onKeyDown={handleKeyPressed}
			/>
		</MainContainer>
	);
};
