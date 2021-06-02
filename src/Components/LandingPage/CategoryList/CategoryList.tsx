import { Heading, SimpleGrid } from '@chakra-ui/layout';
import { useQuizData } from '../../../Context';
import { CategoryCard } from '../CategoryCard';
import { gridStyleProps, headingStyleProps } from './category-list-style-props';

export const CategoryList = () => {
	const {
		quizState: { categories },
	} = useQuizData();

	return (
		<>
			<Heading {...headingStyleProps} textAlign='center'>
				Categories
			</Heading>

			<SimpleGrid {...gridStyleProps}>
				{categories.map(
					(typeOfQuiz): JSX.Element => (
						<CategoryCard key={typeOfQuiz._id} category={typeOfQuiz} />
					),
				)}
			</SimpleGrid>
		</>
	);
};
