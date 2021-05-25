import { Heading, SimpleGrid } from '@chakra-ui/layout';
import { QuizCard } from '../QuizCard';
import { QuizCardFromDb } from '../../../Context/QuizContext/Quiz.type';
import { useStateContext } from '../../../Context';
import {
	gridProps,
	headingStyleProps,
} from './featured-quizzes-list-style-props';

export const FeaturedQuizzesList = () => {
	const {
		state: { featuredQuizzes },
	} = useStateContext();

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
