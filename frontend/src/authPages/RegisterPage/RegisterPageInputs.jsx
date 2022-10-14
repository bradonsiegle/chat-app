import { InputWithLabel } from '../../shared/components';

export const RegisterPageInputs = (props) => {
	const {
		email,
		setEmail,
		username,
		setUsername,
		password,
		setPassword,
		confirmPassword,
		setConfirmPassword,
	} = props;
	return (
		<>
			<InputWithLabel
				value={username}
				setValue={setUsername}
				label='Username'
				type='text'
			/>
			<InputWithLabel
				value={email}
				setValue={setEmail}
				label='Email address'
				type='email'
			/>
			<InputWithLabel
				value={password}
				setValue={setPassword}
				label='Password'
				type='password'
			/>
			<InputWithLabel
				value={confirmPassword}
				setValue={setConfirmPassword}
				label='Confirm password'
				type='password'
			/>
		</>
	);
};
