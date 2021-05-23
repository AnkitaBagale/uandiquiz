import {
	Quiz,
	CategoryOfQuiz,
	QuizCardFromDb,
	CategoryFromDb,
} from '../../database/Quiz.type';

export type InitialStateType = {
	attemptedQuiz: Quiz | null;
	currentQuestionNumber: number;
	categories: CategoryOfQuiz[];
	featuredQuizzes: QuizCardFromDb[];
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
			type: 'SET_CATEGORIES';
			payload: { categories: CategoryOfQuiz[] };
	  }
	| {
			type: 'SET_FEATURED_QUIZZES';
			payload: { featuredQuizzes: QuizCardFromDb[] };
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
