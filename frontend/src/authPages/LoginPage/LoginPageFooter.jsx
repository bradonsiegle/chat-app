import { CustomPrimaryButton, RedirectInfo } from '../../shared/components';
import { useNavigate } from 'react-router-dom';

const getFormMessage = (isFormValid) => {
	if (isFormValid) {
		return 'Log In';
	} else {
		return 'Enter correct email address and password';
	}
};

export const LoginPageFooter = ({ handleLogin, isFormValid }) => {
	const navigate = useNavigate();

	return (
		<>
			<CustomPrimaryButton
				label='Log In'
				additionalStyles={{ marginTop: '2rem' }}
				disabled={!isFormValid}
				onClick={handleLogin}
			/>
			<RedirectInfo
				text="Don't have an account? "
				redirectText='Sign up'
				additionalStyles={{ marginTop: '1.2rem' }}
				redirectHandler={() => navigate('/register')}
			/>
		</>
	);
};
