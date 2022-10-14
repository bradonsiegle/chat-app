import {
	usernameLengthError,
	passwordLengthError,
	passwordMatchError,
	emailError,
} from './validatorErrors';

export const validateLoginForm = ({ email, password }) => {
	return validateEmail(email) && validatePassword(password);
};

//checks for valid username, email, password, and matching passwords
//returns an object with the error messages and a boolean value for if the form is valid
export const validateRegisterForm = ({
	username,
	email,
	password,
	confirmPassword,
}) => {
	const validatedForm = {
		isValid: false,
		error: '',
	};
	if (!validateUsername(username)) {
		validatedForm.isValid = false;
		validatedForm.error = usernameLengthError;
		return validatedForm;
	}
	if (!validateEmail(email)) {
		validatedForm.isValid = false;
		validatedForm.error = emailError;
		return validatedForm;
	}
	if (!validatePassword(password)) {
		validatedForm.isValid = false;
		validatedForm.error = passwordLengthError;
		return validatedForm;
	}
	if (!validateConfirmPassword(password, confirmPassword)) {
		validatedForm.isValid = false;
		validatedForm.error = passwordMatchError;
		return validatedForm;
	}
	validatedForm.isValid = true;
	return validatedForm;
};

const validateUsername = (username) => {
	return username.length >= 3 && username.length <= 16;
};

const validateEmail = (email) => {
	const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
	return emailRegex.test(String(email)?.toLowerCase());
};

const validatePassword = (password) => {
	return password.length >= 6 && password.length <= 16;
};

const validateConfirmPassword = (password, confirmPassword) => {
	return password === confirmPassword;
};
