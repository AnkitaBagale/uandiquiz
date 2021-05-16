import { Card } from './Card';
import { Heading, SimpleGrid } from '@chakra-ui/react';
import { quizes } from '../../database';
import { Header } from './Header';

const gridProps = {
	columns: [1, 2, 3],
	gap: '1.5rem',
	px: '1rem',
};

export const LandingPage = () => {
	return (
		<>
			<Header />
			<Heading py='2rem' px='1.5rem' textAlign='center' id='explore'>
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
