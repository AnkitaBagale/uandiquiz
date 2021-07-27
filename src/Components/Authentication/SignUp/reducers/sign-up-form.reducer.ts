import { ActionForm, InitialFormState } from './reducers.type';

export const initialFormState: InitialFormState = {
	email: '',
	firstName: '',
	lastName: '',
	password: '',
	confirmPassword: '',
	showPassword: false,
	showConfirmPassword: false,
	status: '',
	emailError: '',
	firstNameError: '',
	lastNameError: '',
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
		case 'SET_FIRST_NAME': {
			return { ...formState, firstName: action.payload };
		}
		case 'SET_LAST_NAME': {
			return { ...formState, lastName: action.payload };
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
		case 'SET_EMAIL_ERROR': {
			return { ...formState, emailError: action.payload };
		}
		case 'SET_FIRST_NAME_ERROR': {
			return { ...formState, firstNameError: action.payload };
		}
		case 'SET_LAST_NAME_ERROR': {
			return { ...formState, lastNameError: action.payload };
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
				firstNameError: '',
				lastNameError: '',
				passwordError: '',
				confirmPasswordError: '',
				apiError: '',
			};
		}
		case 'SET_API_ERROR': {
			return { ...formState, apiError: action.payload, status: 'FAILURE' };
		}
		case 'SET_STATUS': {
			return { ...formState, status: action.payload };
		}
		default:
			throw Error('Invalid Action');
	}
};
