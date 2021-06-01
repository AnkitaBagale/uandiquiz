import { ActionErrors, InitialFormState } from '../reducers/reducers.type';
import { checkSignUpFormValidity } from './check-sign-up-form-validity';

export const signupBtnClicked = async (
	formState: InitialFormState,
	errorsDispatch: React.Dispatch<ActionErrors>,
) => {
	console.log('entered');
	errorsDispatch({ type: 'RESET_ERRORS' });
	if (checkSignUpFormValidity(formState, errorsDispatch)) {
		const signUpDetails = {
			firstname: formState.firstName,
			lastname: formState.lastName,
			email: formState.email,
			password: formState.password,
		};
		console.log(signUpDetails);
	}
};
