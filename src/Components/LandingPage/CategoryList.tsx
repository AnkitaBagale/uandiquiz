import { Heading, SimpleGrid } from '@chakra-ui/layout';
import { useStateContext } from '../../Context';
import { CategoryCard } from './CategoryCard';

export const CategoryList = () => {
	const {
		state: { categories },
	} = useStateContext();
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
					(typeOfQuiz): JSX.Element => (
						<CategoryCard key={typeOfQuiz._id} category={typeOfQuiz} />
					),
				)}
			</SimpleGrid>
		</>
	);
};
