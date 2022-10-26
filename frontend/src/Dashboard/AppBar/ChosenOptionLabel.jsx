import { useSelector } from 'react-redux';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import AlternateEmailTwoToneIcon from '@mui/icons-material/AlternateEmailTwoTone';

export const ChosenOptionLabel = () => {
	const name = useSelector((state) => state.chat.chosenChatDetails?.name);
	console.log(name);

	return (
		<>
			{name ? (
				<Box
					sx={{
						display: 'flex',
						alignItems: 'center',
						gap: '0.6rem',
					}}
				>
					<AlternateEmailTwoToneIcon
						sx={{
							fontSize: '2rem',
							color: 'gray',
						}}
					/>
					<Typography
						sx={{
							fontSize: '1rem',
							fontWeight: 'bold',
							color: 'white',
						}}
					>
						{name}
					</Typography>
				</Box>
			) : (
				<Box></Box>
			)}
		</>
	);
};
