import { CustomPrimaryButton, RedirectInfo } from '../../shared/components';
import { useNavigate } from 'react-router-dom';

export const LoginPageFooter = ({ handleLogin, isFormValid }) => {
	const navigate = useNavigate();

	return (
		<>
			<div>
				<CustomPrimaryButton
					label='Login'
					additionalStyles={{ marginTop: '2rem' }}
					disabled={!isFormValid}
					onClick={handleLogin}
				/>
			</div>
			<RedirectInfo
				text="Don't have an account? "
				redirectText='Sign up'
				additionalStyles={{ marginTop: '0.5rem' }}
				redirectHandler={() => navigate('/register')}
			/>
		</>
	);
};
