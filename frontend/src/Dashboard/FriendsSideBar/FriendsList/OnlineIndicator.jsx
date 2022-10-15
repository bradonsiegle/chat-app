import Box from '@mui/material/Box';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

export const OnlineIndicator = () => {
	return (
		<Box
			sx={{
				color: '#3ba55d',
				display: 'flex',
				alignItems: 'center',
				position: 'absolute',
				right: '0.2rem',
			}}
		>
			<FiberManualRecordIcon fontSize='small' />
		</Box>
	);
};
