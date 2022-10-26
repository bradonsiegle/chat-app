import { useEffect } from 'react';
import { styled } from '@mui/system';
import { Messages } from './Messages/Messages';
import { NewMessageInput } from './NewMessageInput';

const Wrapper = styled('div')({
	height: '100%',
	width: '100%',
	display: 'flex',
	flexDirection: 'column',
	flexGrow: 1,
});

export const MessengerContent = ({ chosenChatDetails }) => {
	useEffect(() => {}, [chosenChatDetails]);

	return (
		<Wrapper>
			<Messages />
			<NewMessageInput />
		</Wrapper>
	);
};
