import { Quiz } from '../../database/Quiz.type';

export type InitialStateType = {
	attemptedQuiz: Quiz | null;
	currentQuestionNumber: number;
};

export type ContextType = {
	state: InitialStateType;
	dispatch: (action: ActionType) => void;
};

export type ActionType =
	| {
			type: 'SET_ATTEMPT';
			payload: { quiz: Quiz };
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
