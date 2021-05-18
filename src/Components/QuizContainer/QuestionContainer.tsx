import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Box, Image, Heading, Button } from '@chakra-ui/react';
import { OptionContainer } from './OptionContainer';

import { btnStyleProps, nextButtonStyleProps } from '../utils';
import { useQuiz } from '../../Context';
import { QuestionContainerProps } from './QuestionContainerProps.type';

export const QuestionContainer = ({
	question,
	setShowResult,
}: QuestionContainerProps) => {
	const {
		state: { currentQuestionNumber, attemptedQuiz },
		dispatch,
	} = useQuiz();

	return (
		<>
			<Image
				src={question.image}
				alt={question.question}
				height='auto'
				width='100%'
				borderRadius='1.5rem'
			/>
			<Box py='1rem'>
				<Heading as='h4' size='sm'>
					Question {currentQuestionNumber}
				</Heading>
				<Heading as='h3' size='md' mt='1rem'>
					{question.question}
				</Heading>
				<OptionContainer question={question} />

				<Button
					rightIcon={<ArrowForwardIcon />}
					{...btnStyleProps}
					{...nextButtonStyleProps}
					onClick={() => {
						if (currentQuestionNumber !== attemptedQuiz!.totalQuestions) {
							dispatch({ type: 'INCREMENT_QUESTION_NUMBER' });
						} else {
							dispatch({ type: 'CALCULATE_SCORE' });
							setShowResult(true);
						}
					}}>
					{currentQuestionNumber !== attemptedQuiz!.totalQuestions
						? 'Next'
						: 'submit'}
				</Button>
			</Box>
		</>
	);
};
