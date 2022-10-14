import { Typography } from '@mui/material';

export const LoginPageHeader = () => {
	return (
		<>
			<Typography variant='h5' sx={{ color: 'white', textAlign: 'center' }}>
				Welcome back!
			</Typography>
			<Typography sx={{ color: '#b9bbbe', textAlign: 'center' }}>
				We're so excited to see you again!
			</Typography>
		</>
	);
};
