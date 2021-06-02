import { ActionForm, InitialFormState } from './reducers.type';

export const initialFormState: InitialFormState = {
	email: '',
	password: '',
	confirmPassword: '',
	showPassword: false,
	showConfirmPassword: false,
	status: '',
	emailError: '',
	passwordError: '',
	confirmPasswordError: '',
	apiError: '',
};

export const signUpFormReducer = (
	formState: InitialFormState,
	action: ActionForm,
) => {
	switch (action.type) {
		case 'SET_EMAIL': {
			return { ...formState, email: action.payload };
		}
		case 'SET_PASSWORD': {
			return { ...formState, password: action.payload };
		}
		case 'SET_CONFIRM_PASSWORD': {
			return { ...formState, confirmPassword: action.payload };
		}
		case 'SHOW_PASSWORD': {
			return { ...formState, showPassword: !formState.showPassword };
		}
		case 'SHOW_CONFIRM_PASSWORD': {
			return {
				...formState,
				showConfirmPassword: !formState.showConfirmPassword,
			};
		}
		case 'SET_STATUS': {
			return { ...formState, status: action.payload };
		}
		case 'SET_EMAIL_ERROR': {
			return { ...formState, emailError: action.payload };
		}
		case 'SET_PASSWORD_ERROR': {
			return { ...formState, passwordError: action.payload };
		}
		case 'SET_CONFIRM_PASSWORD_ERROR': {
			return { ...formState, confirmPasswordError: action.payload };
		}
		case 'RESET_ERRORS': {
			return {
				...formState,
				emailError: '',
				passwordError: '',
				confirmPasswordError: '',
				apiError: '',
			};
		}
		case 'SET_API_ERROR': {
			return { ...formState, apiError: action.payload, status: 'FAILURE' };
		}
		default:
			throw Error('Invalid Action');
	}
};
