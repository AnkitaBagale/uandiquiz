import { Quiz, CategoryOfQuiz, QuizCardFromDb } from './Quiz.type';

export type ScoreData = {
	quizId: string;
	quizName: string;
	score: Number;
	scoreStatus: 'PASS' | 'FAIL';
};

export type InitialStateType = {
	attemptedQuiz: Quiz | null;
	currentQuestionNumber: number;
	categories: CategoryOfQuiz[];
	featuredQuizzes: QuizCardFromDb[];
	scoreBoard: ScoreData[];
};

export type ContextType = {
	quizState: InitialStateType;
	quizDispatch: (action: QuizAction) => void;
};

export type QuizAction =
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
