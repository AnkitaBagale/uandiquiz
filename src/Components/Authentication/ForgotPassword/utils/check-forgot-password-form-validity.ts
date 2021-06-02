import { ActionForm, InitialFormState } from '../reducers/reducers.type';

export const checkForgotPasswordFormValidity = (
	formState: InitialFormState,
	formDispatch: React.Dispatch<ActionForm>,
) => {
	let errorFlag = true;

	if (formState.email === '' || !/^.+@.+\.com$/.test(formState.email)) {
		formDispatch({
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
		formDispatch({
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
		formDispatch({
			type: 'SET_CONFIRM_PASSWORD_ERROR',
			payload: 'Password does not match',
		});
		errorFlag = false;
	}

	return errorFlag;
};
