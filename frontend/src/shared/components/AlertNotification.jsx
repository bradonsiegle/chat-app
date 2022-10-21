import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import { useDispatch, useSelector } from 'react-redux';
import { hideAlert } from '../../store/actions/alertActions';

export const AlertNotification = () => {
	const dispatch = useDispatch();
	const { alert } = useSelector((state) => state);
	const { open, message, severity } = alert;

	return (
		<Snackbar
			anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
			open={open}
			onClose={() => {
				dispatch(hideAlert());
			}}
			autoHideDuration={6000}
			sx={{ marginTop: '1.4rem' }}
		>
			<Alert
				severity={severity || 'error'}
				sx={{
					width: {
						xs: '80vw',
						lg: '25vw',
					},
				}}
			>
				{message}
			</Alert>
		</Snackbar>
	);
};
