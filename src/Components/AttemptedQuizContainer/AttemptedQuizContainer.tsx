import { Box, Heading, SimpleGrid, Text } from '@chakra-ui/layout';
import { useQuiz } from '../../Context';
import { Question } from '../../database/Quiz.type';
import { RecommendedSection } from '../RecommendedSection';
import { AnswerContainer } from './AnswerContainer';

export const AttemptedQuizContainer = () => {
	const {
		state: { attemptedQuiz },
	} = useQuiz();

	return (
		<>
			{attemptedQuiz && (
				<>
					<Heading
						fontWeight='500'
						as='h1'
						fontSize='x-large'
						mt='2rem'
						px='1.5rem'
						textAlign='center'>
						Quiz Result
					</Heading>

					<Text
						fontSize='xx-large'
						fontWeight='500'
						mt='1rem'
						px='1.5rem'
						textAlign='center'>
						{attemptedQuiz.score >= 70
							? '🎉 Congratulations! You won!'
							: '🙃 Oops! Better luck next time'}
					</Text>

					<Text
						fontSize='lg'
						fontWeight='500'
						mt='1rem'
						px='1.5rem'
						textAlign='center'>
						Your Score
					</Text>

					<Text
						fontSize='x-large'
						fontWeight='500'
						mt='0.25rem'
						px='1.5rem'
						textAlign='center'>
						<Box
							as='span'
							color={attemptedQuiz.score >= 70 ? 'green.400' : 'red.400'}>
							{attemptedQuiz.score}
						</Box>
						/100
					</Text>

					<Heading
						fontSize='xx-large'
						fontWeight='500'
						mt='5rem'
						px='1.5rem'
						textAlign='center'>
						Check Answers
					</Heading>
					<SimpleGrid
						columns={[1, 2, 2]}
						gap={'1.5rem'}
						px='1.5rem'
						textAlign='center'
						mt='2rem'>
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
				</>
			)}
		</>
	);
};
