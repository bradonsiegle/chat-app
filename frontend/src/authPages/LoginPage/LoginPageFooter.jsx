import { CustomPrimaryButton } from '../../shared/components/CustomPrimaryButton';

export const LoginPageFooter = ({ handleLogin, isFormValid }) => {
	return (
		<CustomPrimaryButton
			label='Login'
			additionalStyles={{ marginTop: '2rem' }}
			disabled={!isFormValid}
			onClick={handleLogin}
		/>
	);
};
