import { Button } from '@chakra-ui/button';
import { StarIcon } from '@chakra-ui/icons';

import {
	Container,
	Heading,
	List,
	ListIcon,
	ListItem,
} from '@chakra-ui/layout';
import { btnStyleProps, solidPrimaryButtonStyleProps } from '../utils';
import { QuizInstructionsProps } from './QuizInstructionsProps.type';
import { instructionsContainerStyleProps, listStyleProps } from './utils';

export const QuizInstructions = ({
	quiz,
	setShowQuiz,
}: QuizInstructionsProps) => {
	return (
		<>
			<Container {...instructionsContainerStyleProps}>
				<Heading mt='2rem'>{quiz.name}</Heading>

				<List {...listStyleProps}>
					<ListItem>
						<ListIcon as={StarIcon} color='#FCBC7B' />
						Each right answer scores 10 Points
					</ListItem>
					<ListItem>
						<ListIcon as={StarIcon} color='#FCBCBC' />
						Each multiple choice question has only one correct answer
					</ListItem>
					<ListItem>
						<ListIcon as={StarIcon} color='#B5DCCD' />
						To win the quiz you need to score more than 70%
					</ListItem>
				</List>

				<Button
					{...btnStyleProps}
					{...solidPrimaryButtonStyleProps}
					mt='1rem'
					onClick={() => setShowQuiz(true)}>
					Start Quiz
				</Button>
			</Container>
		</>
	);
};
