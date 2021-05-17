import { CheckIcon, CloseIcon } from '@chakra-ui/icons';
import { Box, SimpleGrid } from '@chakra-ui/react';
import { Option, Question } from '../../database/Quiz.type';

function OptionCard({ option }: { option: Option }) {
	const bgColor = option.isRight
		? 'green.300'
		: option.isSelected
		? 'red.400'
		: 'gray.400';

	return (
		<Box
			boxShadow='md'
			borderWidth='1px'
			borderRadius='md'
			bg={bgColor}
			color='gray.800'
			fontWeight='bold'
			p='1rem'>
			<Box>
				{option.isSelected && option.isRight && <CheckIcon mr='2' />}
				{option.isSelected && !option.isRight && <CloseIcon mr='2' />}
				{option.text}
			</Box>
		</Box>
	);
}

export const AnswerOptionContainer = ({ question }: { question: Question }) => {
	const options = question.options;

	return (
		<SimpleGrid columns={[2, 2, 2]} gap='1.5rem' mt='2rem'>
			{options.map(
				(option: Option): JSX.Element => (
					<OptionCard key={option._id} option={option} />
				),
			)}
		</SimpleGrid>
	);
};
