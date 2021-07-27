import { loginUserParameters } from '../../../../Context/AuthenticationContext/AuthenticationContext.type';
import { InitialFormState, ActionForm } from '../reducers/reducers.type';
import { checkLoginFormValidity } from './check-login-form-validity';

export type LoginBtnClicked = {
	formState: InitialFormState;
	formDispatch: React.Dispatch<ActionForm>;
	loginUser: (parameters: loginUserParameters) => Promise<string>;
	from: string;
};

export const loginBtnClicked = async ({
	formState,
	formDispatch,
	loginUser,
	from,
}: LoginBtnClicked) => {
	formDispatch({ type: 'RESET_ERRORS' });
	if (checkLoginFormValidity(formState, formDispatch)) {
		formDispatch({ type: 'SET_STATUS', payload: 'LOADING' });
		const message = await loginUser({
			email: formState.email,
			password: formState.password,
			from,
		});

		if (message !== 'SUCCESS') {
			formDispatch({ type: 'SET_API_ERROR', payload: message });
		}
	}
};
