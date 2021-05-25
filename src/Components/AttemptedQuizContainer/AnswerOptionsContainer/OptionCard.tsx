import { CheckIcon, CloseIcon } from '@chakra-ui/icons';
import { Box } from '@chakra-ui/react';
import { Option } from '../../../Context/QuizContext/Quiz.type';

export const OptionCard = ({ option }: { option: Option }) => {
	const bgColor = option.isRight
		? 'green.300'
		: option.isSelected
		? 'red.400'
		: 'gray.400';

	const optionCardStyleProps = {
		boxShadow: 'md',
		borderWidth: '1px',
		borderRadius: 'md',
		bg: bgColor,
		color: 'gray.800',
		fontWeight: 'bold',
		p: '1rem',
	};

	return (
		<Box {...optionCardStyleProps}>
			<Box>
				{option.isSelected && option.isRight && <CheckIcon mr='2' />}
				{option.isSelected && !option.isRight && <CloseIcon mr='2' />}
				{option.text}
			</Box>
		</Box>
	);
};
