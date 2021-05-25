import { SimpleGrid } from '@chakra-ui/react';
import { Option, Question } from '../../../Context/QuizContext/Quiz.type';
import { gridStyleProps } from '../utils';
import { OptionCard } from './OptionCard';

export const AnswerOptionsContainer = ({
	question,
}: {
	question: Question;
}) => {
	const options = question.options;

	return (
		<SimpleGrid {...gridStyleProps}>
			{options.map(
				(option: Option): JSX.Element => (
					<OptionCard key={option._id} option={option} />
				),
			)}
		</SimpleGrid>
	);
};
