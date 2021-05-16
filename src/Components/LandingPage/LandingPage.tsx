import { Card } from './Card';
import { Heading, SimpleGrid } from '@chakra-ui/react';
import { quizes } from '../../database';

const gridProps = {
	columns: [1, 2, 3],
	gap: '1.5rem',
	px: '1rem',
};

export const LandingPage = () => {
	return (
		<>
			<Heading py='2rem' px='1.5rem' textAlign='center'>
				Welcome to Quiz Play
			</Heading>
			<SimpleGrid {...gridProps}>
				{quizes.map(
					(quiz: Quiz): JSX.Element => (
						<Card key={quiz._id} quiz={quiz} />
					),
				)}
			</SimpleGrid>
		</>
	);
};
