import { Quiz } from '../../../Context/QuizContext/Quiz.type';

export const getColorOfScore = (attemptedQuiz: Quiz): string =>
	attemptedQuiz?.score && attemptedQuiz.score >= 70 ? 'green.400' : 'red.400';
