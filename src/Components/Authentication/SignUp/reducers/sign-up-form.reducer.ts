import { ActionForm, InitialFormState } from './reducers.type';

export const initialFormState: InitialFormState = {
	email: '',
	firstName: '',
	lastName: '',
	password: '',
	confirmPassword: '',
	showPassword: false,
	showConfirmPassword: false,
};

export const signUpFormReducer = (
	state: InitialFormState,
	action: ActionForm,
) => {
	switch (action.type) {
		case 'SET_EMAIL': {
			return { ...state, email: action.payload };
		}
		case 'SET_FIRST_NAME': {
			return { ...state, firstName: action.payload };
		}
		case 'SET_LAST_NAME': {
			return { ...state, lastName: action.payload };
		}
		case 'SET_PASSWORD': {
			return { ...state, password: action.payload };
		}
		case 'SET_CONFIRM_PASSWORD': {
			return { ...state, confirmPassword: action.payload };
		}
		case 'SHOW_PASSWORD': {
			return { ...state, showPassword: !state.showPassword };
		}
		case 'SHOW_CONFIRM_PASSWORD': {
			return { ...state, showConfirmPassword: !state.showConfirmPassword };
		}
		default:
			throw Error('Invalid Action');
	}
};
