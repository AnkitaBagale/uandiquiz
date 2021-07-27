import { Quiz } from '../../../Context/QuizContext/Quiz.type';

export const getResultText = (attemptedQuiz: Quiz): string => {
	return attemptedQuiz?.score && attemptedQuiz.score >= 70
		? '🎉 Congratulations! You won!'
		: '🙃 Oops! Better luck next time';
};
