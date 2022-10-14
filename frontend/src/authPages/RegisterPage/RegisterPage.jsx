import { useState } from 'react';
import { Typography } from '@mui/material';
import { AuthBox } from '../../shared/components/AuthBox';
import { RegisterPageInputs, RegisterPageFooter } from './';
import { validateRegisterForm } from '../../shared/utils/validators';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { register } from '../../store/actions/authActions';
import { showAlert } from '../../store/actions/alertActions';

export const RegisterPage = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const [email, setEmail] = useState('');
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [isFormValid, setIsFormValid] = useState(false);
	const [error, setError] = useState('');

	const handleRegister = () => {
		const { isValid, error } = validateRegisterForm({
			email,
			username,
			password,
			confirmPassword,
		});
		setIsFormValid(isValid);
		setError(error);
		if (isValid) {
			const userDetails = { email, username, password };
			dispatch(register(userDetails, navigate));
		} else {
			dispatch(showAlert(error));
		}
	};

	return (
		<AuthBox>
			<Typography
				variant='h5'
				sx={{ color: '#fff', textAlign: 'center', marginBottom: '0.5rem' }}
			>
				Create an account
			</Typography>
			<RegisterPageInputs
				email={email}
				setEmail={setEmail}
				username={username}
				setUsername={setUsername}
				password={password}
				setPassword={setPassword}
				confirmPassword={confirmPassword}
				setConfirmPassword={setConfirmPassword}
			/>
			<RegisterPageFooter handleRegister={handleRegister} />
		</AuthBox>
	);
};
