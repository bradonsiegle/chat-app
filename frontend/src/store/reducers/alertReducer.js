import { alertActions } from '../actions/alertActions';

const initialState = {
	open: false,
	message: '',
};

const reducer = (state = initialState, action) => {
	const { type, message, severity } = action;
	switch (type) {
		case alertActions.SHOW_ALERT:
			return {
				open: true,
				message,
				severity,
			};
		case alertActions.HIDE_ALERT:
			return {
				open: false,
				message: '',
			};
		default:
			return state;
	}
};

export default reducer;
