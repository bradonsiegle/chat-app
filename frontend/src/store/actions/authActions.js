import * as api from '../../api';
import { showAlert } from './alertActions';

export const authActions = {
	SET_USER_DETAILS: 'AUTH.SET_USER_DETAILS',
};

const setUserDetails = (userDetails) => {
	return {
		type: authActions.SET_USER_DETAILS,
		payload: userDetails,
	};
};

export const getActions = (dispatch) => {
	return {
		login: (userDetails, navigate) => dispatch(login(userDetails, navigate)),
		register: (userDetails, navigate) =>
			dispatch(register(userDetails, navigate)),
	};
};

export const login = (userDetails, navigate) => {
	return async (dispatch) => {
		const response = await api.login(userDetails);
		console.log(response);
		if (response.error) {
			dispatch(showAlert(response?.exception?.response?.data));
		} else {
			const { userDetails } = response?.data;
			localStorage.setItem('user', JSON.stringify(userDetails));
			dispatch(setUserDetails(userDetails));
			navigate('/dashboard');
		}
	};
};

export const register = (userDetails, navigate) => {
	return async (dispatch) => {
		const response = await api.register(userDetails);
		console.log(response);

		if (response.error) {
			console.log(response.exception);
			dispatch(showAlert(response?.exception?.response?.data));
		} else {
			const { userDetails } = response?.data;
			localStorage.setItem('user', JSON.stringify(userDetails));
			dispatch(setUserDetails(userDetails));
			navigate('/dashboard');
		}
	};
};
