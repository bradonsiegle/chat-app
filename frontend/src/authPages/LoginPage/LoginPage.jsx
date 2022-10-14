import { useState, useEffect } from 'react';
import { AuthBox } from '../../shared/components/AuthBox';
import { LoginPageHeader, LoginPageInputs, LoginPageFooter } from './index.js';
import { validateLoginForm } from '../../shared/utils/validators';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../../store/actions/authActions';

export const LoginPage = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [isFormValid, setIsFormValid] = useState(false);

	useEffect(() => {
		setIsFormValid(validateLoginForm({ email, password }));
	}, [email, password, setIsFormValid]);

	const handleLogin = () => {
		const userDetails = { email, password };
		dispatch(login(userDetails, navigate));
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
