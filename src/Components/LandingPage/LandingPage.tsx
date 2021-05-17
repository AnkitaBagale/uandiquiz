import { Card } from './Card';
import { Box, Flex, Heading, Image, SimpleGrid, Text } from '@chakra-ui/react';
import { quizes, typesOfQuiz } from '../../database';
import { Header } from './Header';
import { Quiz } from '../../database/Quiz.type';

const gridProps = {
	columns: [1, 2, 3],
	gap: '1.5rem',
	px: '1rem',
};

export const LandingPage = () => {
	return (
		<>
			<Header />

			<Heading pt='0rem' pb='3rem' px='1.5rem' textAlign='center' id='explore'>
				Categories
			</Heading>

			<Flex mb='5rem' justifyContent='center'>
				{typesOfQuiz.map(({ type, image, noOfQuiz, cardColor }) => (
					<Box
						key={type}
						borderRadius='1.5rem'
						maxW='14rem'
						width='100%'
						mx='2rem'
						bg={cardColor}
						textAlign='center'
						fontSize='x-large'
						cursor='pointer'
						p='1rem'>
						<Image width='100%' src={image} alt='quiz' />
						<Heading fontSize='1.2rem' fontWeight='500'>
							{type}
						</Heading>
						<Text fontSize='1rem'>
							{noOfQuiz ? `${noOfQuiz} Quiz` : 'Coming soon..'}
						</Text>
					</Box>
				))}
			</Flex>

			<Heading pt='2rem' pb='3rem' px='1.5rem' textAlign='center' id='explore'>
				Featured Quizes
			</Heading>
			<SimpleGrid {...gridProps} mb='5rem'>
				{quizes.map(
					(quiz: Quiz): JSX.Element => (
						<Card key={quiz._id} quiz={quiz} />
					),
				)}
			</SimpleGrid>
		</>
	);
};
