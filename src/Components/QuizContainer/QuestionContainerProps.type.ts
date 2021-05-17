import { Question } from '../../database/Quiz.type';

export type QuestionContainerProps = {
	question: Question;
	setShowResult: (flag: boolean) => void;
};
