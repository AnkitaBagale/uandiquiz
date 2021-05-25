import { CategoryOfQuiz } from '../../../Context/QuizContext/Quiz.type';
import { Box, Heading, Image, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { cardWrapperStyleProps } from './category-card-style-props';

export const CategoryCard = ({ category }: { category: CategoryOfQuiz }) => {
	const renderNumberOfQuizzesOrComingSoon = (): string =>
		category.quizzes ? `${category.quizzes} Quiz` : 'Coming soon..';

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

				<Text fontSize='1rem'>{renderNumberOfQuizzesOrComingSoon()}</Text>
			</Box>
		</Link>
	);
};
