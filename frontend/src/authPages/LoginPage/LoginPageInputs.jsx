import { InputWithLabel } from '../../shared/components';

export const LoginPageInputs = () => {
	return (
		<>
			<InputWithLabel
				value
				setValue
				label='Email'
				type='text'
				placeholder='Enter your email address'
			/>
		</>
	);
};
