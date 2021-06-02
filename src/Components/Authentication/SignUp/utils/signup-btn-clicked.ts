import { SignupUserParameters } from '../../../../Context/AuthenticationContext/AuthenticationContext.type';
import { ActionForm, InitialFormState } from '../reducers/reducers.type';
import { checkSignUpFormValidity } from './check-sign-up-form-validity';

export type LoginBtnClicked = {
	formState: InitialFormState;
	formDispatch: React.Dispatch<ActionForm>;
	signUpNewUser: (parameters: SignupUserParameters) => Promise<string>;
};

export const signupBtnClicked = async ({
	formState,
	formDispatch,
	signUpNewUser,
}: LoginBtnClicked) => {
	formDispatch({ type: 'RESET_ERRORS' });
	if (checkSignUpFormValidity(formState, formDispatch)) {
		formDispatch({ type: 'SET_STATUS', payload: 'LOADING' });
		const signUpDetails = {
			firstname: formState.firstName,
			lastname: formState.lastName,
			email: formState.email,
			password: formState.password,
		};
		const message = await signUpNewUser(signUpDetails);

		if (message !== 'SUCCESS') {
			formDispatch({ type: 'SET_API_ERROR', payload: message });
			return;
		}
		formDispatch({ type: 'SET_STATUS', payload: 'SUCCESS' });
	}
};
