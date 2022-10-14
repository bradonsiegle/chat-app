import { authActions } from '../actions/authActions';

const user = JSON.parse(localStorage.getItem('user'));

const initialState = user
	? { isLoggedIn: true, userDetails: user }
	: { isLoggedIn: false, userDetails: null };

const reducer = (state = initialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case authActions.SET_USER_DETAILS:
			return {
				...state,
				isLoggedIn: true,
				userDetails: payload,
			};
		default:
			return state;
	}
};

export default reducer;
