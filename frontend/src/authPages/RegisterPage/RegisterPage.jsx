import { useState, useEffect } from 'react';
import { Typography } from '@mui/material';
import { AuthBox } from '../../shared/components/AuthBox';
import { RegisterPageInputs, RegisterPageFooter } from './';
import { validateRegisterForm } from '../../shared/utils/validators';

export const RegisterPage = () => {
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
			console.log(email, username, password, confirmPassword);
		} else {
			console.log(error);
		}
	};

	return (
		<AuthBox>
			<Typography variant='h5' sx={{ color: '#fff' }}>
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
			<RegisterPageFooter
				handleRegister={handleRegister}
				isFormValid={isFormValid}
				formError={error}
			/>
		</AuthBox>
	);
};
