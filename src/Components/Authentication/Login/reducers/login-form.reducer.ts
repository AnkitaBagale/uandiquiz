import { ActionForm, InitialFormState } from './reducers.type';

export const initialFormState: InitialFormState = {
	email: '',
	password: '',
	showPassword: false,
};

export const signUpFormReducer = (
	state: InitialFormState,
	action: ActionForm,
) => {
	switch (action.type) {
		case 'SET_EMAIL': {
			return { ...state, email: action.payload };
		}
		case 'SET_PASSWORD': {
			return { ...state, password: action.payload };
		}
		case 'SHOW_PASSWORD': {
			return { ...state, showPassword: !state.showPassword };
		}
		default:
			throw Error('Invalid Action');
	}
};
