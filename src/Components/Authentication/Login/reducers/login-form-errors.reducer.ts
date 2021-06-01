import { ActionErrors, InitialFormErrorsState } from './reducers.type';

export const initialErrorsState: InitialFormErrorsState = {
	emailError: '',
	passwordError: '',
	apiError: '',
};

export const signUpFormErrorsReducer = (
	state: InitialFormErrorsState,
	action: ActionErrors,
) => {
	switch (action.type) {
		case 'SET_EMAIL_ERROR': {
			return { ...state, emailError: action.payload };
		}
		case 'SET_PASSWORD_ERROR': {
			return { ...state, passwordError: action.payload };
		}
		case 'RESET_ERRORS': {
			return initialErrorsState;
		}
		case 'SET_API_ERROR': {
			return { ...state, apiError: action.payload };
		}
		default:
			throw Error('Invalid Action');
	}
};
