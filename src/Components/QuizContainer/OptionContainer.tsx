import { Box, SimpleGrid, useRadio, useRadioGroup } from '@chakra-ui/react';
import { useStateContext } from '../../Context';
import { Option, Question } from '../../Context/QuizContext/Quiz.type';
import { optionsGridStyleProps, radioCardStyleProps } from './utils';

function RadioCard(props: any) {
	const { getInputProps, getCheckboxProps } = useRadio(props.radio);

	const input = getInputProps();
	const checkbox = getCheckboxProps();

	return (
		<Box as='label'>
			<input {...input} checked={!!props.option.isSelected} />
			<Box {...checkbox} {...radioCardStyleProps}>
				{props.children}
			</Box>
		</Box>
	);
}

export const OptionContainer = ({ question }: { question: Question }) => {
	const options = question.options;

	const { dispatch } = useStateContext();

	const updateAnswer = (optionId: string): void => {
		dispatch({
			type: 'SELECT_OPTION',
			payload: {
				questionId: question._id,
				optionId,
			},
		});
	};

	const { getRootProps, getRadioProps } = useRadioGroup({
		name: 'framework',
		onChange: updateAnswer,
	});

	const group = getRootProps();

	return (
		<SimpleGrid {...optionsGridStyleProps} {...group}>
			{options.map((option: Option): JSX.Element => {
				const radio = getRadioProps({
					value: option._id,
				});

				return (
					<RadioCard key={option._id} radio={radio} option={option}>
						{option.text}
					</RadioCard>
				);
			})}
		</SimpleGrid>
	);
};
