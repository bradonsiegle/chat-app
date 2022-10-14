import { InputWithLabel } from '../../shared/components';

export const LoginPageInputs = (props) => {
	const { email, setEmail, password, setPassword } = props;

	return (
		<>
			<InputWithLabel
				value={email}
				setValue={setEmail}
				label='Email'
				type='text'
			/>
			<InputWithLabel
				value={password}
				setValue={setPassword}
				label='Password'
				type='password'
			/>
		</>
	);
};
