import { Question } from '../../Context/QuizContext/Quiz.type';

export type QuestionContainerProps = {
	question: Question;
	setShowResult: (flag: boolean) => void;
};
