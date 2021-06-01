import { ActionErrors, InitialFormState } from '../reducers/reducers.type';
import { checkLoginFormValidity } from './check-login-form-validity';

export const loginBtnClicked = async (
	formState: InitialFormState,
	errorsDispatch: React.Dispatch<ActionErrors>,
) => {
	console.log('entered');
	errorsDispatch({ type: 'RESET_ERRORS' });
	if (checkLoginFormValidity(formState, errorsDispatch)) {
		const loginDetails = {
			email: formState.email,
			password: formState.password,
		};
		console.log(loginDetails);
	}
};
