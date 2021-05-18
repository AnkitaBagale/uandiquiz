import { Heading, SimpleGrid } from '@chakra-ui/layout';
import { quizzes } from '../../database';
import { QuizCard } from './QuizCard';
import { Quiz } from '../../database/Quiz.type';

export const FeaturedQuizzesList = () => {
	const gridProps = {
		columns: [1, 2, 3],
		gap: '2rem',
		px: '1.5rem',
		maxW: '67rem',
		margin: 'auto',
	};
	return (
		<>
			<Heading pt='2rem' pb='3rem' px='1.5rem' textAlign='center' id='explore'>
				Featured Quizzes
			</Heading>
			<SimpleGrid {...gridProps} mb='5rem'>
				{quizzes.map(
					(quiz: Quiz): JSX.Element => (
						<QuizCard key={quiz._id} quiz={quiz} />
					),
				)}
			</SimpleGrid>
		</>
	);
};
