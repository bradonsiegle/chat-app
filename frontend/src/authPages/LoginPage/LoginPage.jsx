import { useState } from 'react';
import { AuthBox } from '../../shared/components/AuthBox';
import { LoginPageHeader } from './LoginPageHeader';
import { LoginPageInputs } from './LoginPageInputs';

export const LoginPage = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	return (
		<AuthBox>
			<LoginPageHeader />
			<LoginPageInputs
				email={email}
				setEmail={setEmail}
				password={password}
				setPassword={setPassword}
			/>
		</AuthBox>
	);
};
