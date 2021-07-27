import { QuizAction } from '../QuizContext/QuizContext.type';

export type AuthenticationState = {
	token: string;
	username: string;
	userDetails: null | UserDetails;
};

export type UserDetails = {
	email: string;
	firstname: string;
	lastname: string;
};

export type AuthenticationAction =
	| {
			type: 'LOGIN_USER';
			payload: { token: string; username: string };
	  }
	| {
			type: 'LOGOUT_USER';
	  }
	| {
			type: 'SET_USER_DETAILS';
			payload: UserDetails;
	  };

export type loginUserParameters = {
	email: string;
	password: string;
	from: string;
};

export type SignupUserParameters = {
	email: string;
	password: string;
	firstname: string;
	lastname: string;
};

export type AuthenticationContext = {
	loginUser: (parameters: loginUserParameters) => Promise<string>;
	logOutUser: () => void;
	signUpNewUser: (parameters: SignupUserParameters) => Promise<string>;
	authenticationState: AuthenticationState;
	fetchUserDetails: () => Promise<string>;
};

export type LocationState = {
	from: string;
};
