import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { setUserDetails } from '../../store/actions/authActions';
import { Navigate } from 'react-router-dom';

export const ProtectedRoute = ({ children }) => {
	const dispatch = useDispatch();
	const userDetails = JSON.parse(localStorage.getItem('user'));

	//check for user details in local storage
	useEffect(() => {
		if (userDetails) {
			dispatch(setUserDetails(userDetails));
		} else {
			localStorage.removeItem('user');
		}
	}, [userDetails, dispatch]);

	return userDetails ? children : <Navigate to='/login' replace />;
};
