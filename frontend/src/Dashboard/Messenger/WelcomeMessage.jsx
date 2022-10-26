import { styled } from '@mui/system';
import { Typography } from '@mui/material';

const Wrapper = styled('div')({
	flexGrow: 1,
	height: '100%',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
});

export const WelcomeMessage = () => {
	return (
		<Wrapper>
			<Typography variant='h6' color='white'>
				Welcome to the Messenger! Add friends and choose a chat to start a
				conversation.
			</Typography>
		</Wrapper>
	);
};
