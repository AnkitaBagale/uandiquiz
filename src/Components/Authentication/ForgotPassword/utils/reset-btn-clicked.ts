import { ActionErrors, InitialFormState } from '../reducers/reducers.type';
import { checkForgotPasswordFormValidity } from './check-forgot-password-form-validity';

export const resetBtnClicked = async (
	formState: InitialFormState,
	errorsDispatch: React.Dispatch<ActionErrors>,
) => {
	console.log('entered');
	errorsDispatch({ type: 'RESET_ERRORS' });
	if (checkForgotPasswordFormValidity(formState, errorsDispatch)) {
		const signUpDetails = {
			email: formState.email,
			password: formState.password,
		};
		console.log(signUpDetails);
	}
};
