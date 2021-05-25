import { Box, Heading, SimpleGrid, Text } from '@chakra-ui/layout';
import { useStateContext } from '../../Context';
import { Question } from '../../Context/QuizContext/Quiz.type';
import { RecommendedSection } from '../RecommendedSection';
import { AnswerContainer } from './AnswerContainer';
import {
	gridStyleProps,
	textSizeMdStyleProps,
	textSizeLgStyleProps,
	textSizeSmStyleProps,
	getResultText,
	getColorOfScore,
} from './utils';

export const AttemptedQuizContainer = () => {
	const {
		state: { attemptedQuiz },
	} = useStateContext();

	return (
		<>
			{attemptedQuiz && (
				<Box mt='2rem'>
					<Heading as='h1' textAlign='center' {...textSizeMdStyleProps}>
						Quiz Result
					</Heading>

					<Text textAlign='center' {...textSizeLgStyleProps}>
						{getResultText(attemptedQuiz)}
					</Text>

					<Text textAlign='center' {...textSizeSmStyleProps}>
						Your Score
					</Text>

					<Text textAlign='center' {...textSizeMdStyleProps}>
						<Box as='span' color={getColorOfScore(attemptedQuiz)}>
							{attemptedQuiz.score}
						</Box>
						/100
					</Text>

					<Heading textAlign='center' {...textSizeLgStyleProps} mt='5rem'>
						Check Answers
					</Heading>

					<SimpleGrid textAlign='center' px='1.5rem' {...gridStyleProps}>
						{attemptedQuiz.questions.map(
							(question: Question, index: number): JSX.Element => (
								<AnswerContainer
									key={question._id}
									question={question}
									questionNumber={index}
								/>
							),
						)}
					</SimpleGrid>
					<RecommendedSection type={attemptedQuiz.category} />
				</Box>
			)}
		</>
	);
};
