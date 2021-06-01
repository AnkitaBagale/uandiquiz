import { ActionErrors, InitialFormState } from '../reducers/reducers.type';

export const checkLoginFormValidity = (
	formState: InitialFormState,
	errorsDispatch: React.Dispatch<ActionErrors>,
) => {
	let errorFlag = true;
	console.log('entered in validation');

	if (formState.email === '' || !/^.+@.+\.com$/.test(formState.email)) {
		errorsDispatch({
			type: 'SET_EMAIL_ERROR',
			payload: 'Please enter valid email id',
		});
		errorFlag = false;
	}
	if (formState.password === '') {
		errorsDispatch({
			type: 'SET_PASSWORD_ERROR',
			payload: 'Please enter password',
		});
		errorFlag = false;
	}

	return errorFlag;
};
