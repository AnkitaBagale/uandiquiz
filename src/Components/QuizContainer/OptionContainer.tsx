import { Box, SimpleGrid, useRadio, useRadioGroup } from '@chakra-ui/react';
import { useStateContext } from '../../Context';
import { Option, Question } from '../../Context/QuizContext/Quiz.type';

function RadioCard(props: any) {
	const { getInputProps, getCheckboxProps } = useRadio(props.radio);

	const input = getInputProps();
	const checkbox = getCheckboxProps();

	return (
		<Box as='label'>
			<input {...input} checked={!!props.option.isSelected} />
			<Box
				{...checkbox}
				boxShadow='md'
				cursor='pointer'
				borderWidth='1px'
				borderRadius='md'
				bg='gray.400'
				color='gray.800'
				fontWeight='bold'
				_checked={{
					bg: 'pink.700',
					color: 'white',
					borderColor: 'pink.700',
					fontWeight: '400',
				}}
				_hover={{
					bg: 'pink.700',
					color: 'white',
				}}
				_focus={{
					boxShadow: 'outline',
				}}
				p='1rem'>
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
		<SimpleGrid columns={[2, 2, 2]} gap='1.5rem' mt='2rem' {...group}>
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
