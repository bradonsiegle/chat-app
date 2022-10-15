import { Typography } from '@mui/material';

export const FriendsTitle = ({ title }) => {
	return (
		<Typography
			sx={{
				textTransform: 'uppercase',
				color: '#8E9297',
				fontSize: '0.8rem',
				marginTop: '0.8rem',
			}}
		>
			{title}
		</Typography>
	);
};
