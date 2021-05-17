import { Button } from '@chakra-ui/button';
import { StarIcon } from '@chakra-ui/icons';

import {
	Container,
	Heading,
	List,
	ListIcon,
	ListItem,
} from '@chakra-ui/layout';
import { btnStyleProps, solidPrimaryButtonStyleProps } from '../Buttons';

export const QuizInstructions = ({
	quiz,
	setShowQuiz,
}: QuizInstructionsProps) => {
	return (
		<>
			<Container
				border='1px'
				textAlign='center'
				borderColor='pink.300'
				p='0rem 1.5rem 2rem 1.5rem'
				my='2rem'>
				<Heading mt='2rem'>{quiz.name}</Heading>

				<List spacing={3} mt='2rem' textAlign='left'>
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
