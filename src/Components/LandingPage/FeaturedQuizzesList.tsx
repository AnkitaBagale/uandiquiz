import { Heading, SimpleGrid } from '@chakra-ui/layout';
import { QuizCard } from './QuizCard';
import { QuizCardFromDb } from '../../database/Quiz.type';
import { useStateContext } from '../../Context';

export const FeaturedQuizzesList = () => {
	const {
		state: { featuredQuizzes },
	} = useStateContext();
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
				Popular Quizzes
			</Heading>
			<SimpleGrid {...gridProps} mb='5rem'>
				{featuredQuizzes.map(
					(quiz: QuizCardFromDb): JSX.Element => (
						<QuizCard key={quiz._id} quiz={quiz} />
					),
				)}
			</SimpleGrid>
		</>
	);
};
