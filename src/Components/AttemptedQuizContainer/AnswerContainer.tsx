import { Box, Image, Heading, Text } from '@chakra-ui/react';
import { isSelectedOptionRight } from '../../utils';
import { AnswerOptionContainer } from './AnswerOptionContainer';
import { AnswerContainerProps } from './AnswerContainerProps.type';
import { Option } from '../../database/Quiz.type';

export const AnswerContainer = ({
	question,
	questionNumber,
}: AnswerContainerProps) => {
	const textStyleProps = {
		display: 'inline-block',
		borderRadius: 6,
		mt: '1rem',
		color: 'gray.800',
		fontWeight: '500',
		bg: 'pink.300',
		py: '0.5rem',
		px: '1rem',
	};

	const imageStyleProps = {
		height: 'auto',
		width: '100%',
		borderRadius: '1.5rem',
	};

	const getPointsForAnswer = (
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

	const points = getPointsForAnswer(
		question.options,
		question.points,
		question.negativePoints,
	);

	return (
		<>
			<Image
				{...imageStyleProps}
				src={question.image}
				alt={question.question}
			/>
			<Box py='1rem'>
				<Heading as='h4' size='sm'>
					Question {questionNumber + 1}
				</Heading>
				<Heading as='h3' size='md' mt='1rem'>
					{question.question}
				</Heading>
				<Text {...textStyleProps}>Points: {points}</Text>
				<AnswerOptionContainer question={question} />
			</Box>
		</>
	);
};
