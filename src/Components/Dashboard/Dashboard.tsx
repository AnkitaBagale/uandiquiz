import { Box, Heading } from '@chakra-ui/layout';
import { useStateContext } from '../../Context';
import { ScoreCard } from './ScoreCard';

export const Dashboard = () => {
	const {
		state: { scoreBoard },
	} = useStateContext();

	return (
		<Box padding='1rem' maxW='56rem' margin='auto'>
			<Heading textAlign='center' pt='1rem'>
				Progress Dashboard
			</Heading>
			{scoreBoard.length === 0 ? (
				<Box as='h4' fontSize='xl' textAlign='center' pt='2rem'>
					No Quiz Attempted
				</Box>
			) : (
				<Box pt='2rem'>
					{scoreBoard.map((data) => (
						<ScoreCard data={data} />
					))}
				</Box>
			)}
		</Box>
	);
};
