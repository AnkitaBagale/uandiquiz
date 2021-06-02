import { ResetPasswordParameters } from '../../../../Context/AuthenticationContext/AuthenticationContext.type';
import { ActionForm, InitialFormState } from '../reducers/reducers.type';
import { checkForgotPasswordFormValidity } from './check-forgot-password-form-validity';

type ResetBtnClicked = {
	formState: InitialFormState;
	formDispatch: React.Dispatch<ActionForm>;
	resetPassword: (parameters: ResetPasswordParameters) => Promise<string>;
};
export const resetBtnClicked = async ({
	formState,
	formDispatch,
	resetPassword,
}: ResetBtnClicked) => {
	formDispatch({ type: 'RESET_ERRORS' });
	formDispatch({ type: 'SET_STATUS', payload: '' });

	if (checkForgotPasswordFormValidity(formState, formDispatch)) {
		formDispatch({ type: 'SET_STATUS', payload: 'LOADING' });

		const userDetails = {
			email: formState.email,
			password: formState.password,
		};

		const message = await resetPassword(userDetails);

		if (message !== 'SUCCESS') {
			formDispatch({ type: 'SET_API_ERROR', payload: message });
			return;
		}
		formDispatch({ type: 'SET_STATUS', payload: 'SUCCESS' });
	}
};
