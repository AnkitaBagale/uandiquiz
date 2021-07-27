import { Quiz } from '../../Context/QuizContext/Quiz.type';

export type QuizInstructionsProps = {
	quizName: string;
	setShowQuiz: (flag: boolean) => void;
};
