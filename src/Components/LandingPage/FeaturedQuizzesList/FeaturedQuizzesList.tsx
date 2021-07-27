import { Heading, SimpleGrid } from '@chakra-ui/layout';
import { QuizCard } from '../QuizCard';
import { QuizCardFromDb } from '../../../Context/QuizContext/Quiz.type';
import { useQuizData } from '../../../Context';
import {
	gridProps,
	headingStyleProps,
} from './featured-quizzes-list-style-props';

export const FeaturedQuizzesList = () => {
	const {
		quizState: { featuredQuizzes },
	} = useQuizData();

	return (
		<>
			<Heading textAlign='center' {...headingStyleProps}>
				Popular Quizzes
			</Heading>
			<SimpleGrid {...gridProps}>
				{featuredQuizzes.map(
					(quiz: QuizCardFromDb): JSX.Element => (
						<QuizCard key={quiz._id} quiz={quiz} />
					),
				)}
			</SimpleGrid>
		</>
	);
};
