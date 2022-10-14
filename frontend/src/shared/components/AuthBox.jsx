import Box from '@mui/material/Box';
import { styled } from '@mui/system';

const BoxWrapper = styled('div')({
	width: '100vw',
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
					maxWidth: {
						xs: '100%',
						lg: '420px',
					},
					width: {
						xs: '100vw',
						sm: '60%',
						lg: '60%',
					},
					height: {
						xs: '100vh',
						sm: '60%',
						lg: '56%',
					},
					bgcolor: '#36393f',
					borderRadius: {
						xs: '0',
						md: '0.5rem',
					},
					boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.2)',
					display: 'flex',
					flexDirection: 'column',
					padding: '2rem',
					marginTop: {
						xs: '4rem',
						sm: '0',
					},
				}}
			>
				{props.children}
			</Box>
		</BoxWrapper>
	);
};
