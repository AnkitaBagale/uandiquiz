import { createContext, useContext, useReducer } from 'react';
import { ContextType, InitialStateType, ScoreData } from './QuizContext.type';
import { quizDataReducer } from './reducer';

const QuizDataContext = createContext<ContextType>({} as ContextType);

export const QuizDataProvider: React.FC = ({ children }) => {
	let scoreDataFromLocalStorageStrigified = localStorage.getItem('scoreBoard');
	const scoreDataFromLocalStorage = scoreDataFromLocalStorageStrigified
		? (JSON.parse(scoreDataFromLocalStorageStrigified).scores as ScoreData[])
		: [];

	const initialState: InitialStateType = {
		attemptedQuiz: null,
		currentQuestionNumber: 1,
		categories: [],
		featuredQuizzes: [],
		scoreBoard: scoreDataFromLocalStorage,
	};
	const [quizState, quizDispatch] = useReducer(quizDataReducer, initialState);

	return (
		<QuizDataContext.Provider value={{ quizState, quizDispatch }}>
			{children}
		</QuizDataContext.Provider>
	);
};

export const useQuizData = () => useContext(QuizDataContext);
