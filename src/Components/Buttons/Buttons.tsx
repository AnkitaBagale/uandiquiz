import { Button } from '@chakra-ui/react';

export const btnStyleProps = {
	px: '1.5rem',
	borderRadius: 'full',
	py: '0.5rem',
	height: 'auto',
	fontWeight: 'normal',
	_focus: {
		boxShadow: '0 0 0 2px black',
	},
};

export const solidPrimaryButtonStyleProps = {
	color: 'gray.100',
	bg: 'pink.700',
	_hover: { bg: 'pink.800' },
	_active: {
		bg: 'pink.800',
		transform: 'scale(0.98)',
		borderColor: 'pink.800',
	},
};

export const nextButtonStyleProps = {
	mt: '1.5rem',
	color: 'gray.100',
	bg: 'pink.700',
	_hover: { bg: 'pink.800' },
	_active: {
		bg: 'pink.700',
		transform: 'scale(0.98)',
		borderColor: 'pink.700',
	},
};

export const ButtonSolidPrimarySizeSmall = ({
	btnText,
	...props
}: {
	btnText: string;
}) => {
	return (
		<>
			<Button
				{...props}
				{...solidPrimaryButtonStyleProps}
				{...btnStyleProps}
				fontSize='0.8rem'>
				{btnText}
			</Button>
		</>
	);
};
