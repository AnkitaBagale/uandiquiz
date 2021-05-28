import { Box, Image, Heading, Text } from '@chakra-ui/react';
import { AnswerOptionsContainer } from '../AnswerOptionsContainer';
import { AnswerContainerProps } from './AnswerContainerProps.type';
import { textStyleProps, imageStyleProps, getPointsForAnswer } from './utils';

export const AnswerContainer = ({
	question,
	questionNumber,
}: AnswerContainerProps) => {
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
				alt='question-reference'
			/>
			<Box py='1rem'>
				<Heading as='h4' size='sm'>
					Question {questionNumber + 1}
				</Heading>
				<Heading as='h3' size='md' mt='1rem'>
					{question.question}
				</Heading>
				<Text {...textStyleProps}>Points: {points}</Text>
				<AnswerOptionsContainer question={question} />
			</Box>
		</>
	);
};
