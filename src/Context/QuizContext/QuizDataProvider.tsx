import { createContext, useContext, useReducer } from 'react';
import { ContextType } from './QuizContext.type';
import { quizReducer, initialState } from './quizdata-reducer';

const QuizDataContext = createContext<ContextType>({} as ContextType);

export const QuizDataProvider: React.FC = ({ children }) => {
	const [state, dispatch] = useReducer(quizReducer, initialState);
	return (
		<QuizDataContext.Provider value={{ state, dispatch }}>
			{children}
		</QuizDataContext.Provider>
	);
};

export const useQuiz = () => useContext(QuizDataContext);
