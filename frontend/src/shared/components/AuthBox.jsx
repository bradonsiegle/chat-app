import Box from '@mui/material/Box';
import { styled } from '@mui/system';

const BoxWrapper = styled('div')({
	width: '100%',
	height: '100vh',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	backgroundColor: '#5865f2',
});

export const AuthBox = (props) => {
	return (
		<BoxWrapper>
			<Box
				sx={{
					maxWidth: '400px',
					width: {
						xs: '80vw',
						lg: '60%',
					},
					height: {
						xs: '70vh',
						lg: '60%',
					},
					bgcolor: '#36393f',
					borderRadius: '5px',
					boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.2)',
					display: 'flex',
					flexDirection: 'column',
					padding: '20px',
				}}
			>
				{props.children}
			</Box>
		</BoxWrapper>
	);
};
