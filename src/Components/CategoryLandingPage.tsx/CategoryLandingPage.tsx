import { Heading, SimpleGrid } from '@chakra-ui/layout';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { quizzes } from '../../database';
import { Quiz } from '../../database/Quiz.type';
import { QuizCard } from '../LandingPage/QuizCard';

export const CategoryLandingPage = () => {
	const { categoryName } = useParams();
	const [quizzesOfCategory, setQuizzes] = useState<Quiz[] | null>(null);

	const gridProps = {
		columns: [1, 2, 3],
		gap: '2rem',
		px: '1.5rem',
	};

	useEffect(() => {
		const filteredQuizzes = quizzes.filter(
			(quiz) => quiz.type === categoryName,
		);
		setQuizzes(filteredQuizzes);
	}, []);

	return (
		<>
			<Heading pt='2rem' pb='3rem' px='1.5rem' textAlign='center' id='explore'>
				{categoryName} Quizzes
			</Heading>

			{quizzesOfCategory &&
				(quizzesOfCategory.length > 0 ? (
					<SimpleGrid {...gridProps} mb='5rem'>
						{quizzesOfCategory.map(
							(quiz: Quiz): JSX.Element => (
								<QuizCard key={quiz._id} quiz={quiz} />
							),
						)}
					</SimpleGrid>
				) : (
					<Heading
						fontSize='x-large'
						pt='2rem'
						pb='3rem'
						px='1.5rem'
						textAlign='center'
						id='explore'>
						Coming Soon...
					</Heading>
				))}
		</>
	);
};
