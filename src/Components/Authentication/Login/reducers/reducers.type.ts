export type InitialFormState = {
	email: string;
	password: string;
	showPassword: boolean;
	status: string;
	emailError: string;
	passwordError: string;
	apiError: string;
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
			type: 'SHOW_PASSWORD';
	  }
	| {
			type: 'SET_STATUS';
			payload: string;
	  }
	| {
			type: 'SET_EMAIL_ERROR';
			payload: string;
	  }
	| {
			type: 'SET_PASSWORD_ERROR';
			payload: string;
	  }
	| {
			type: 'RESET_ERRORS';
	  }
	| {
			type: 'SET_API_ERROR';
			payload: string;
	  };
