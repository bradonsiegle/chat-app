import { styled } from '@mui/system';
import Typography from '@mui/material/Typography';
import { Avatar } from '../../../shared/components/Avatar';

const MainContainer = styled('div')({
	display: 'column',
	width: '98%',
	marginTop: '0.8rem',
});

export const MessagesHeader = ({ name = '' }) => {
	return (
		<MainContainer>
			<Avatar large username={name} />
			<Typography
				variant='h4'
				color='white'
				sx={{
					margin: '0.4rem',
				}}
			>
				{name}
			</Typography>
			<Typography
				color='#b9bbbe'
				sx={{
					margin: '0.4rem',
				}}
			>
				This is the beginning of your chat history with{' '}
				<span style={{ fontWeight: 'bold' }}>@{name}</span>
			</Typography>
		</MainContainer>
	);
};
