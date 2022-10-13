import { CustomPrimaryButton, RedirectInfo } from '../../shared/components';
import { useNavigate } from 'react-router-dom';
import { Tooltip } from '@mui/material';

const getFormMessage = (isFormValid) => {
	if (isFormValid) {
		return 'Login';
	} else {
		return 'Enter correct email address and password';
	}
};

export const LoginPageFooter = ({ handleLogin, isFormValid }) => {
	const navigate = useNavigate();

	return (
		<>
			<Tooltip
				title={
					<h3 style={{ fontSize: '0.8rem' }}>{getFormMessage(isFormValid)}</h3>
				}
			>
				<div>
					<CustomPrimaryButton
						label='Login'
						additionalStyles={{ marginTop: '2rem' }}
						disabled={!isFormValid}
						onClick={handleLogin}
					/>
				</div>
			</Tooltip>
			<RedirectInfo
				text="Don't have an account? "
				redirectText='Sign up'
				additionalStyles={{ marginTop: '0.5rem' }}
				redirectHandler={() => navigate('/register')}
			/>
		</>
	);
};
