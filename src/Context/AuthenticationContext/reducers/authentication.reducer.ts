import {
	AuthenticationAction,
	AuthenticationState,
} from '../AuthenticationContext.type';

export const authenticationReducer = (
	state: AuthenticationState,
	action: AuthenticationAction,
) => {
	switch (action.type) {
		case 'LOGIN_USER': {
			return {
				...state,
				username: action.payload.username,
				token: action.payload.token,
			};
		}
		case 'LOGOUT_USER': {
			return {
				...state,
				username: '',
				token: '',
				userDetails: null,
			};
		}

		case 'SET_USER_DETAILS': {
			return {
				...state,
				userDetails: action.payload,
			};
		}

		default:
			throw new Error('Unhandled type of action');
	}
};
