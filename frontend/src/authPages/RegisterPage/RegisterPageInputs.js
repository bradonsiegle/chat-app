import { InputWithLabel } from '../../shared/components/';

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
				placeholder='Enter username'
			/>
			<InputWithLabel
				value={email}
				setValue={setEmail}
				label='Email address'
				type='email'
				placeholder='Enter email address'
			/>
			<InputWithLabel
				value={password}
				setValue={setPassword}
				label='Password'
				type='password'
				placeholder='Enter password (minimum 6 characters)'
			/>
			<InputWithLabel
				value={confirmPassword}
				setValue={setConfirmPassword}
				label='Confirm password'
				type='password'
				placeholder='Confirm password (passwords must match)'
			/>
		</>
	);
};
