import { ScoreData } from '../../Context/QuizContext/QuizContext.type';
import { btnStyleProps, solidPrimaryButtonStyleProps } from '../utils';
import { Link } from 'react-router-dom';
import { Button } from '@chakra-ui/button';
import { Box, Heading } from '@chakra-ui/layout';

import {
	getColorAccordingToResultStatus,
	scoreListWrapperProps,
	scoreTextWrapperProps,
} from './utils';

export const ScoreCard = ({ data }: { data: ScoreData }) => {
	return (
		<Link to={`/quiz/${data.quizId}`}>
			<Box
				{...scoreListWrapperProps}
				borderColor={getColorAccordingToResultStatus(data.scoreStatus)}>
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
};
