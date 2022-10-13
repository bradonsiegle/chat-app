import { Typography } from '@mui/material';
import { styled } from '@mui/system';

const RedirectText = styled('span')({
	color: '#00aff4',
	fontWeight: 500,
	cursor: 'pointer',
	'&:hover': {
		textDecoration: 'underline',
	},
});

export const RedirectInfo = ({
	text,
	redirectText,
	additionalStyles,
	redirectHandler,
}) => {
	return (
		<Typography
			sx={{
				color: '#72767d',
				...additionalStyles,
			}}
			variant='subtitle2'
		>
			{text}
			<RedirectText onClick={redirectHandler}>{redirectText}</RedirectText>
		</Typography>
	);
};
