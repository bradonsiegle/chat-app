export const alertActions = {
	SHOW_ALERT: 'ALERT.SHOW_ALERT',
	HIDE_ALERT: 'ALERT.HIDE_ALERT',
};

export const showAlert = (message, severity) => {
	return {
		type: alertActions.SHOW_ALERT,
		message,
		severity,
	};
};

export const hideAlert = () => {
	return {
		type: alertActions.HIDE_ALERT,
	};
};
