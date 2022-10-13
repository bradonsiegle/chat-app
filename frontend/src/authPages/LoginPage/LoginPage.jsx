import { useState } from 'react';
import { AuthBox } from '../../shared/components/AuthBox';
import { LoginPageHeader, LoginPageInputs, LoginPageFooter } from './index.js';

export const LoginPage = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [isFormValid, setIsFormValid] = useState(false);

	const handleLogin = () => {
		console.log('Login');
	};

	return (
		<AuthBox>
			<LoginPageHeader />
			<LoginPageInputs
				email={email}
				setEmail={setEmail}
				password={password}
				setPassword={setPassword}
			/>
			<LoginPageFooter isFormValid={isFormValid} handleLogin={handleLogin} />
		</AuthBox>
	);
};
