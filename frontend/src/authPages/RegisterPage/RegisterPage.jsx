import { useState } from 'react';

import { Typography } from '@mui/material';
import { AuthBox } from '../../shared/components/AuthBox';
import { RegisterPageInputs } from './RegisterPageInputs';
import { RegisterPageFooter } from './RegisterPageFooter';

export const RegisterPage = () => {
	const [email, setEmail] = useState('');
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [isFormValid, setIsFormValid] = useState(false);

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
		</AuthBox>
	);
};
