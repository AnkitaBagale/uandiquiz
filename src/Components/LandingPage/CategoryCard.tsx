import { CategoryOfQuiz } from '../../database/Quiz.type';
import { Box, Heading, Image, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export const CategoryCard = ({ category }: { category: CategoryOfQuiz }) => {
	return (
		<Link to={`/category/${category.type}`}>
			<Box
				key={category._id}
				borderRadius='1.5rem'
				width='100%'
				height='100%'
				maxW='14rem'
				m='auto'
				bg={category.cardColor}
				textAlign='center'
				fontSize='x-large'
				cursor='pointer'
				p='1rem'>
				<Image width='100%' src={category.image} alt='quiz' />
				<Heading fontSize='1.2rem' fontWeight='500'>
					{category.type}
				</Heading>
				<Text fontSize='1rem'>
					{category.noOfQuiz ? `${category.noOfQuiz} Quiz` : 'Coming soon..'}
				</Text>
			</Box>
		</Link>
	);
};
