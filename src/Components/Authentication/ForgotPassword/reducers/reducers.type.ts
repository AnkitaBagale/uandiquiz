export type InitialFormState = {
	email: string;
	password: string;
	confirmPassword: string;
	showPassword: boolean;
	showConfirmPassword: boolean;
};

export type ActionForm =
	| {
			type: 'SET_EMAIL';
			payload: string;
	  }
	| {
			type: 'SET_PASSWORD';
			payload: string;
	  }
	| {
			type: 'SET_CONFIRM_PASSWORD';
			payload: string;
	  }
	| {
			type: 'SHOW_PASSWORD';
	  }
	| {
			type: 'SHOW_CONFIRM_PASSWORD';
	  };

export type InitialFormErrorsState = {
	emailError: string;
	passwordError: string;
	confirmPasswordError: string;
	apiError: string;
};

export type ActionErrors =
	| {
			type: 'SET_EMAIL_ERROR';
			payload: string;
	  }
	| {
			type: 'SET_PASSWORD_ERROR';
			payload: string;
	  }
	| {
			type: 'SET_CONFIRM_PASSWORD_ERROR';
			payload: string;
	  }
	| {
			type: 'RESET_ERRORS';
	  }
	| {
			type: 'SET_API_ERROR';
			payload: string;
	  };
