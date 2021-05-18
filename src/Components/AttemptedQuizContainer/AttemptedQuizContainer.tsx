import { Box, Heading, SimpleGrid, Text } from '@chakra-ui/layout';
import { useQuiz } from '../../Context';
import { Question, Quiz } from '../../database/Quiz.type';
import { RecommendedSection } from '../RecommendedSection';
import { AnswerContainer } from './AnswerContainer';

export const AttemptedQuizContainer = () => {
	const {
		state: { attemptedQuiz },
	} = useQuiz();

	const gridStyleProps = {
		columns: [1, 2, 2],
		gap: '1.5rem',
		px: '1.5rem',
		mt: '2rem',
	};
	const textSizeMdStyleProps = {
		fontWeight: '500',
		fontSize: 'x-large',
		px: '1.5rem',
	};
	const textSizeLgStyleProps = {
		fontSize: 'xx-large',
		fontWeight: '500',
		mt: '1rem',
		px: '1.5rem',
	};

	const textSizeSmStyleProps = {
		fontSize: 'large',
		fontWeight: '500',
		mt: '1rem',
		px: '1.5rem',
	};

	const getColorOfScore = (attemptedQuiz: Quiz): string =>
		attemptedQuiz.score >= 70 ? 'green.400' : 'red.400';
	return (
		<>
			{attemptedQuiz && (
				<Box mt='2rem'>
					<Heading as='h1' textAlign='center' {...textSizeMdStyleProps}>
						Quiz Result
					</Heading>

					<Text textAlign='center' {...textSizeLgStyleProps}>
						{attemptedQuiz.score >= 70
							? '🎉 Congratulations! You won!'
							: '🙃 Oops! Better luck next time'}
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

					<SimpleGrid textAlign='center' {...gridStyleProps}>
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
					<RecommendedSection type={attemptedQuiz.type} />
				</Box>
			)}
		</>
	);
};
