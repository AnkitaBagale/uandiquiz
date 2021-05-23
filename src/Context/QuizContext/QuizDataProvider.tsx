import { createContext, useContext, useReducer } from 'react';
import { ContextType } from './QuizContext.type';
import { quizDataReducer, initialState } from './reducer';

const QuizDataContext = createContext<ContextType>({} as ContextType);

export const QuizDataProvider: React.FC = ({ children }) => {
	const [state, dispatch] = useReducer(quizDataReducer, initialState);

	return (
		<QuizDataContext.Provider value={{ state, dispatch }}>
			{children}
		</QuizDataContext.Provider>
	);
};

export const useStateContext = () => useContext(QuizDataContext);
