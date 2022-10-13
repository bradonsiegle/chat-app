export const validateLoginForm = ({ email, password }) => {
	return validateEmail(email) && validatePassword(password);
};

const validateEmail = (email) => {
	const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
	return emailRegex.test(String(email).toLowerCase());
};

const validatePassword = (password) => {
	return password.length >= 6 && password.length <= 16;
};
