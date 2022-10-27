import { useEffect } from 'react';
import { styled } from '@mui/system';
import { Messages } from './Messages/Messages';
import { NewMessageInput } from './NewMessageInput';
import { getDirectChatHistory } from '../../realtimeCommunication/socketConnection';

const Wrapper = styled('div')({
	height: '100%',
	width: '100%',
	display: 'flex',
	flexDirection: 'column',
	flexGrow: 1,
});

export const MessengerContent = ({ chosenChatDetails }) => {
	useEffect(() => {
		getDirectChatHistory({
			recieverUserId: chosenChatDetails.id,
		});
	}, [chosenChatDetails]);

	return (
		<Wrapper>
			<Messages />
			<NewMessageInput />
		</Wrapper>
	);
};
