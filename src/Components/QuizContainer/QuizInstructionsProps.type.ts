import { Quiz } from '../../database/Quiz.type';

export type QuizInstructionsProps = {
	quiz: Quiz;
	setShowQuiz: (flag: boolean) => void;
};
