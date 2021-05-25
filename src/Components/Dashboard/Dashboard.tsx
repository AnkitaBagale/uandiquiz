import { Button } from '@chakra-ui/button';
import { Box, Heading } from '@chakra-ui/layout';
import { Link } from 'react-router-dom';
import { useStateContext } from '../../Context';
import { btnStyleProps, solidPrimaryButtonStyleProps } from '../utils';
import {
	getColorAccordingToResultStatus,
	scoreListWrapperProps,
	scoreTextWrapperProps,
} from './utils';

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
					{scoreBoard.map((data) => {
						return (
							<Link to={`/quiz/${data.quizId}`}>
								<Box
									{...scoreListWrapperProps}
									borderColor={getColorAccordingToResultStatus(
										data.scoreStatus,
									)}>
									<Box>
										<Heading fontSize='lg'>{data.quizName}</Heading>
										<Button
											mt='1rem'
											{...btnStyleProps}
											{...solidPrimaryButtonStyleProps}>
											Retake
										</Button>
									</Box>
									<Box
										{...scoreTextWrapperProps}
										bg={getColorAccordingToResultStatus(data.scoreStatus)}>
										<Box as='span' pr='1rem'>
											{data.score}
										</Box>
										{data.scoreStatus}
									</Box>
								</Box>
							</Link>
						);
					})}
				</Box>
			)}
		</Box>
	);
};
