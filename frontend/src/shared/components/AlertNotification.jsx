import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';

export const AlertNotification = (props) => {
	return (
		<Snackbar
			anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
			open
			onClose={() => {}}
			autoHideDuration={6000}
			sx={{ marginTop: '1.4rem' }}
		>
			<Alert severity={props.severity} sx={{ width: '100%' }}>
				{props.message}
			</Alert>
		</Snackbar>
	);
};
