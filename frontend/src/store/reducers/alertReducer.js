import { alertActions } from '../actions/alertActions';

const initialState = {
	open: false,
	message: '',
};

const reducer = (state = initialState, action) => {
	const { type, message } = action;
	switch (type) {
		case alertActions.SHOW_ALERT:
			return {
				open: true,
				message: message,
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
