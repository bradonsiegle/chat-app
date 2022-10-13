export const validateLoginForm = ({ email, password }) => {
	return validateEmail(email) && validatePassword(password);
};

export const validateRegisterForm = ({
	username,
	email,
	password,
	confirmPassword,
}) => {
	return (
		validateUsername(username) &&
		validateEmail(email) &&
		validatePassword(password) &&
		validateConfirmPassword(password, confirmPassword)
	);
};

const validateUsername = (username) => {
	return username.length >= 3 && username.length <= 16;
};

const validateEmail = (email) => {
	const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
	return emailRegex.test(String(email).toLowerCase());
};

const validatePassword = (password) => {
	return password.length >= 6 && password.length <= 16;
};

const validateConfirmPassword = (password, confirmPassword) => {
	return password === confirmPassword;
};
