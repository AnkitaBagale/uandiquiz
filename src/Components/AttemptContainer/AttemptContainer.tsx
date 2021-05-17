import { Box, Heading, SimpleGrid, Text } from '@chakra-ui/layout';
import { useQuiz } from '../../Context';
import { RecommendedSection } from '../RecommendedSection';
import { AnswerContainer } from './AnswerContainer';

export const AttemptContainer = () => {
	const {
		state: { attempt },
	} = useQuiz();

	return (
		<>
			{attempt && (
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
						{attempt.score >= 70
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
							color={attempt.score >= 70 ? 'green.400' : 'red.400'}>
							{attempt.score}
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
						{attempt.questions.map(
							(question: Question, index: number): JSX.Element => (
								<AnswerContainer
									key={question._id}
									question={question}
									questionNumber={index}
								/>
							),
						)}
					</SimpleGrid>
					<RecommendedSection type={attempt.type} />
				</>
			)}
		</>
	);
};
