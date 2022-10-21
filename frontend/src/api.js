import axios from 'axios';
import { logout } from './shared/utils';

const apiClient = axios.create({
	baseURL: 'http://localhost:5002/api',
	timeout: 1000,
});

apiClient.interceptors.request.use(
	(config) => {
		const userDetails = localStorage.getItem('user');
		if (userDetails) {
			const { token } = JSON.parse(userDetails);
			config.headers.Authorization = `Bearer ${token}`;
		}
		return config;
	},
	(error) => Promise.reject(error)
);

//public routes
export const login = async (data) => {
	try {
		return await apiClient.post('/auth/login', data);
	} catch (exception) {
		return {
			error: true,
			exception,
		};
	}
};

export const register = async (data) => {
	try {
		return await apiClient.post('/auth/register', data);
	} catch (exception) {
		return {
			error: true,
			exception,
		};
	}
};

//protected routes

export const sendFriendInvitation = async (data) => {
	try {
		return await apiClient.post('/friends/invite', data);
	} catch (exception) {
		checkStatus(exception);
		return {
			error: true,
			exception,
		};
	}
};

const checkStatus = (exception) => {
	if (exception.response) {
		const { status } = exception.response;
		if (status === 401 || status === 403) {
			logout();
		}
	}
};
