import { Quiz } from '../../Context/QuizContext/Quiz.type';

export type QuizInstructionsProps = {
	quiz: Quiz;
	setShowQuiz: (flag: boolean) => void;
};
