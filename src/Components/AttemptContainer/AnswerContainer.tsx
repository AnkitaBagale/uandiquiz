import { Box, Image, Heading, Text } from '@chakra-ui/react';
import { isSelectedOptionRight } from '../../utils';
import { AnswerOptionContainer } from './AnswerOptionContainer';

export const AnswerContainer = ({
	question,
	questionNumber,
}: AnswerContainerProps) => {
	return (
		<>
			<Image
				src={question.image}
				alt={question.question}
				height='auto'
				width='100%'
				objectFit='cover'
				borderRadius='1.5rem'
				shadow='base'
			/>
			<Box py='1rem'>
				<Heading as='h4' size='sm'>
					Question {questionNumber + 1}
				</Heading>
				<Heading as='h3' size='md' mt='1rem'>
					{question.question}
				</Heading>
				<Text
					display='inline-block'
					borderRadius={6}
					mt='1rem'
					color='gray.800'
					fontWeight='500'
					bg='pink.300'
					py='0.5rem'
					px='1rem'>
					Points:
					{isSelectedOptionRight(question.options)
						? question.points
						: question.negativePoints
						? question.negativePoints
						: 0}
				</Text>
				<AnswerOptionContainer question={question} />
			</Box>
		</>
	);
};
