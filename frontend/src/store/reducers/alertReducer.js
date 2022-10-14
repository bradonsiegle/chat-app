import alertActions from '../actions/alertActions';

const initialState = {
	showAlert: false,
	message: '',
};

const reducer = (state = initialState, action) => {
	const { type, message } = action;
	switch (type) {
		case alertActions.SHOW_ALERT:
			return {
				showAlert: true,
				message: message,
			};
		case alertActions.HIDE_ALERT:
			return {
				showAlert: false,
				message: '',
			};
		default:
			return state;
	}
};

export default reducer;
