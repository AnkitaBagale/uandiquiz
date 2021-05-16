type InitialStateType = {
	attempt: Quiz | null;
	currentQuestionNumber: number;
};

type ContextType = {
	state: InitialStateType;
	dispatch: (action: ActionType) => void;
};

type ActionType =
	| {
			type: 'SET_ATTEMPT';
			payload: Quiz;
	  }
	| {
			type: 'INCREMENT_QUESTION_NUMBER';
	  }
	| {
			type: 'CALCULATE_SCORE';
	  }
	| {
			type: 'RESET';
	  }
	| {
			type: 'SELECT_OPTION';
			payload: {
				questionId: string;
				optionId: string;
			};
	  };
