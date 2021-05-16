import { createContext, useContext, useReducer } from 'react';
import { quizReducer, initialState } from './quizdata-reducer';

const QuizDataContext = createContext<ContextType>({
	state: initialState,
	dispatch: (arg: ActionType) => {
		console.log('This is default value');
	},
});

export const QuizDataProvider: React.FC = ({ children }) => {
	const [state, dispatch] = useReducer(quizReducer, initialState);
	return (
		<QuizDataContext.Provider value={{ state, dispatch }}>
			{children}
		</QuizDataContext.Provider>
	);
};

export const useQuiz = () => useContext(QuizDataContext);
