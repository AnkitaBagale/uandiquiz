import { Button } from '@chakra-ui/react';

export const btnStyleProps = {
	px: '1.5rem',
	py: '0.5rem',
	height: 'auto',
	fontWeight: 'normal',
	_focus: {
		boxShadow: '0 0 0 2px black',
	},
};

export const solidPrimaryButtonStyleProps = {
	color: 'gray.100',
	borderRadius: 'full',
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
	borderRadius: 'full',
	color: 'gray.100',
	bg: 'pink.700',
	_hover: { bg: 'pink.800' },
	_active: {
		bg: 'pink.700',
		transform: 'scale(0.98)',
		borderColor: 'pink.700',
	},
};

export const blockButtonStyleProps = {
	d: 'block',
	w: '100%',
	color: 'gray.100',
	borderRadius: 'base',
	bg: 'pink.700',
	_hover: { bg: 'pink.800' },
	_active: {
		bg: 'pink.800',
		transform: 'scale(0.98)',
		borderColor: 'pink.800',
	},
};

export const textLinkStyleProps = {
	ml: '0.5rem',
	borderBottomWidth: '0.1rem',
	borderColor: 'pink.800',
	_hover: { color: 'pink.800' },
	_active: { color: 'pink.800' },
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

export const solidSecondaryButtonStyleProps = {
	color: 'gray.800',
	bg: 'gray.400',
	borderRadius: 'full',
	_hover: { bg: 'gray.600', color: 'gray.900' },
	_active: {
		bg: 'gray.600',
		transform: 'scale(0.98)',
		borderColor: 'gray.600',
		color: 'gray.900',
	},
};
