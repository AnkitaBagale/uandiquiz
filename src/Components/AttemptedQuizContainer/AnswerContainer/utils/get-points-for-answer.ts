import { isSelectedOptionRight } from '../../../../utils';
import { Option } from '../../../../Context/QuizContext/Quiz.type';

export const getPointsForAnswer = (
	options: Option[],
	points: number,
	negativePoints?: number,
): number => {
	return isSelectedOptionRight(options)
		? points
		: negativePoints
		? negativePoints
		: 0;
};
