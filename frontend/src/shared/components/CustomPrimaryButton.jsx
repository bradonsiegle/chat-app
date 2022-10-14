import Button from '@mui/material/Button';

export const CustomPrimaryButton = ({
	label,
	additionalStyles,
	disabled,
	onClick,
}) => {
	return (
		<Button
			variant='contained'
			sx={{
				backgroundColor: '#5865F2',
				color: '#fff',
				textTransform: 'none',
				fontSize: '1rem',
				fontWeight: 600,
				width: '100%',
				height: '3rem',
				boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.2)',
				borderRadius: '0.2rem',
			}}
			style={additionalStyles ? additionalStyles : {}}
			disabled={disabled}
			onClick={onClick}
		>
			{label}
		</Button>
	);
};
