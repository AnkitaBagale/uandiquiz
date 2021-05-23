import { CategoryOfQuiz } from '../../database/Quiz.type';
import { Box, Heading, Image, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export const CategoryCard = ({ category }: { category: CategoryOfQuiz }) => {
	const cardWrapperStyleProps = {
		borderRadius: '1.5rem',
		width: '100%',
		height: '100%',
		maxW: '14rem',
		m: 'auto',
		fontSize: 'x-large',
		cursor: 'pointer',
		p: '1rem',
	};

	return (
		<Link to={`/category/${category._id}`}>
			<Box
				key={category._id}
				bg={category.featuredColor}
				textAlign='center'
				{...cardWrapperStyleProps}>
				<Image width='100%' src={category.image} alt='quiz' />

				<Heading fontSize='1.2rem' fontWeight='500'>
					{category.name}
				</Heading>

				<Text fontSize='1rem'>
					{category.quizzes ? `${category.quizzes} Quiz` : 'Coming soon..'}
				</Text>
			</Box>
		</Link>
	);
};
