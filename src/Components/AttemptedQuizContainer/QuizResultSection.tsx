import {
	textSizeMdStyleProps,
	textSizeLgStyleProps,
	textSizeSmStyleProps,
	getResultText,
	getColorOfScore,
} from './utils';
import { Box, Heading, Text } from '@chakra-ui/layout';
import { useQuizData } from '../../Context';
import { Quiz } from '../../Context/QuizContext/Quiz.type';

export const QuizResultSection = () => {
	const {
		quizState: { attemptedQuiz },
	} = useQuizData();
	return (
		<>
			<Heading as='h1' textAlign='center' {...textSizeMdStyleProps}>
				Quiz Result
			</Heading>
			<Text textAlign='center' {...textSizeLgStyleProps}>
				{getResultText(attemptedQuiz as Quiz)}
			</Text>
			<Text textAlign='center' {...textSizeSmStyleProps}>
				Your Score
			</Text>
			<Text textAlign='center' {...textSizeMdStyleProps}>
				<Box as='span' color={getColorOfScore(attemptedQuiz as Quiz)}>
					{attemptedQuiz!.score}
				</Box>
				/100
			</Text>
			<Heading textAlign='center' {...textSizeLgStyleProps} mt='5rem'>
				Check Answers
			</Heading>
		</>
	);
};
