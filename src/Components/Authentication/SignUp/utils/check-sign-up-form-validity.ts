import { ActionErrors, InitialFormState } from '../reducers/reducers.type';

export const checkSignUpFormValidity = (
	formState: InitialFormState,
	errorsDispatch: React.Dispatch<ActionErrors>,
) => {
	let errorFlag = true;
	console.log('entered in validation');
	if (
		formState.firstName === '' ||
		!/^[a-zA-Z]+(\s*\w*)*$/.test(formState.firstName)
	) {
		errorsDispatch({
			type: 'SET_FIRST_NAME_ERROR',
			payload: 'Please enter valid first name',
		});
		errorFlag = false;
	}
	if (
		formState.lastName === '' ||
		!/^[a-zA-Z]+(\s*\w*)*$/.test(formState.lastName)
	) {
		errorsDispatch({
			type: 'SET_LAST_NAME_ERROR',
			payload: 'Please enter valid last name',
		});
		errorFlag = false;
	}
	if (formState.email === '' || !/^.+@.+\.com$/.test(formState.email)) {
		errorsDispatch({
			type: 'SET_EMAIL_ERROR',
			payload: 'Please enter valid email id',
		});
		errorFlag = false;
	}
	if (
		formState.password === '' ||
		!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/g.test(
			formState.password,
		)
	) {
		errorsDispatch({
			type: 'SET_PASSWORD_ERROR',
			payload:
				'Password length should contain minimum 8 characters (at least one capital, small letter and number)',
		});
		errorFlag = false;
	}
	if (
		formState.confirmPassword === '' ||
		formState.password !== formState.confirmPassword
	) {
		errorsDispatch({
			type: 'SET_CONFIRM_PASSWORD_ERROR',
			payload: 'Password does not match',
		});
		errorFlag = false;
	}

	return errorFlag;
};
