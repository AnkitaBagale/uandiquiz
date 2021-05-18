import { Heading, SimpleGrid } from '@chakra-ui/layout';
import { categories } from '../../database';
import { CategoryOfQuiz } from '../../database/Quiz.type';
import { CategoryCard } from './CategoryCard';

export const CategoryList = () => {
	const gridStyleProps = {
		columns: [2, 2, 4],
		maxW: ['33rem', '33rem', '67rem'],
		gap: ['2rem', '2rem', '2rem'],
		m: 'auto',
		mb: '5rem',
		px: '1.5rem',
		justifyContent: 'center',
	};

	return (
		<>
			<Heading pt='0rem' pb='3rem' px='1.5rem' textAlign='center' id='explore'>
				Categories
			</Heading>

			<SimpleGrid {...gridStyleProps}>
				{categories.map(
					(typeOfQuiz: CategoryOfQuiz): JSX.Element => (
						<CategoryCard key={typeOfQuiz._id} category={typeOfQuiz} />
					),
				)}
			</SimpleGrid>
		</>
	);
};
