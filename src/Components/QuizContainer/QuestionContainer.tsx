import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Box, Image, Heading, SimpleGrid, Button } from '@chakra-ui/react';
import { OptionContainer } from './OptionContainer';

import { btnStyleProps, nextButtonStyleProps } from '../utils';
import { useStateContext } from '../../Context';
import { QuestionContainerProps } from './QuestionContainerProps.type';
import { imageStyleProps, gridStyleProps } from './utils';

export const QuestionContainer = ({
	question,
	setShowResult,
}: QuestionContainerProps) => {
	const {
		state: { currentQuestionNumber, attemptedQuiz },
		dispatch,
	} = useStateContext();

	const updateQuestionOrSubmitQuiz = () => {
		if (currentQuestionNumber !== attemptedQuiz!.totalQuestions) {
			dispatch({ type: 'INCREMENT_QUESTION_NUMBER' });
		} else {
			dispatch({ type: 'CALCULATE_SCORE' });
			setShowResult(true);
		}
	};

	return (
		<>
			<SimpleGrid {...gridStyleProps}>
				<Image src={question.image} {...imageStyleProps} />
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
						onClick={updateQuestionOrSubmitQuiz}>
						{currentQuestionNumber !== attemptedQuiz!.totalQuestions
							? 'Next'
							: 'submit'}
					</Button>
				</Box>
			</SimpleGrid>
		</>
	);
};
