import { useState, useEffect } from 'react';
import { AuthBox } from '../../shared/components/AuthBox';
import { LoginPageHeader, LoginPageInputs, LoginPageFooter } from './index.js';
import { validateLoginForm } from '../../shared/utils/validators';

export const LoginPage = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [isFormValid, setIsFormValid] = useState(false);

	useEffect(() => {
		setIsFormValid(validateLoginForm({ email, password }));
	}, [email, password, setIsFormValid]);

	const handleLogin = () => {
		console.log(email, password);
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
