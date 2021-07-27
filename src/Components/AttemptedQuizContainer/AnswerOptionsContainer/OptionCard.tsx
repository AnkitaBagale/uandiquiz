import { CheckIcon, CloseIcon } from '@chakra-ui/icons';
import { Box } from '@chakra-ui/react';
import { Option } from '../../../Context/QuizContext/Quiz.type';
import { optionCardStyleProps } from './option-card-style-props';

export const OptionCard = ({ option }: { option: Option }) => {
	const bgColor = option.isRight
		? 'green.300'
		: option.isSelected
		? 'red.400'
		: 'gray.400';

	return (
		<Box {...optionCardStyleProps} bg={bgColor}>
			<Box>
				{option.isSelected && option.isRight && <CheckIcon mr='2' />}
				{option.isSelected && !option.isRight && <CloseIcon mr='2' />}
				{option.text}
			</Box>
		</Box>
	);
};
