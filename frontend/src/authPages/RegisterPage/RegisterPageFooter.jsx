import { CustomPrimaryButton, RedirectInfo } from '../../shared/components';
import { useNavigate } from 'react-router-dom';
import { Tooltip } from '@mui/material';

const getFormMessage = (isFormValid, formError) => {
	if (isFormValid) {
		return 'Success!';
	} else {
		return formError;
	}
};

export const RegisterPageFooter = ({
	handleRegister,
	isFormValid,
	formError,
}) => {
	const navigate = useNavigate();

	return (
		<>
			<Tooltip
				title={
					<h3 style={{ fontSize: '0.8rem' }}>
						{getFormMessage(isFormValid, formError)}
					</h3>
				}
				enterTouchDelay={0}
				leaveTouchDelay={5000}
			>
				<div>
					<CustomPrimaryButton
						label='Register'
						additionalStyles={{ marginTop: '2rem' }}
						onClick={handleRegister}
					/>
				</div>
			</Tooltip>
			<RedirectInfo
				text='Already have an account? '
				redirectText='Sign in'
				additionalStyles={{ marginTop: '0.5rem' }}
				redirectHandler={() => navigate('/login')}
			/>
		</>
	);
};
