import { useDispatch } from 'react-redux';
import { authActions } from '../../store/actions/authActions';
import { Navigate } from 'react-router-dom';

export const ProtectedRoute = ({ children }) => {
	const dispatch = useDispatch();

	const user = JSON.parse(localStorage.getItem('user'));

	if (user) {
		dispatch(authActions.SET_USER_DETAILS(user));
	}

	return user ? children : <Navigate to='/login' replace />;
};
