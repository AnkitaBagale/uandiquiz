import { Option } from '../../Context/QuizContext/Quiz.type';

export const isSelectedOptionRight = (options: Option[]): boolean => {
	return !!options.find(({ isSelected, isRight }) => isSelected && isRight);
};
