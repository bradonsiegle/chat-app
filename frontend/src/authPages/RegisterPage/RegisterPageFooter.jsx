import { CustomPrimaryButton, RedirectInfo } from '../../shared/components';
import { useNavigate } from 'react-router-dom';

export const RegisterPageFooter = ({ handleRegister }) => {
	const navigate = useNavigate();

	return (
		<>
			<CustomPrimaryButton
				label='Register'
				additionalStyles={{ marginTop: '2rem' }}
				onClick={handleRegister}
			/>
			<RedirectInfo
				text='Already have an account? '
				redirectText='Sign in'
				additionalStyles={{ marginTop: '1.2rem' }}
				redirectHandler={() => navigate('/login')}
			/>
		</>
	);
};
