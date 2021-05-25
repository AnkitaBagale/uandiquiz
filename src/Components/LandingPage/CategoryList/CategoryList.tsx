import { Heading, SimpleGrid } from '@chakra-ui/layout';
import { useStateContext } from '../../../Context';
import { CategoryCard } from '../CategoryCard';
import { gridStyleProps, headingStyleProps } from './category-list-style-props';

export const CategoryList = () => {
	const {
		state: { categories },
	} = useStateContext();

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
