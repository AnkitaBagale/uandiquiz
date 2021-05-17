import { ArrowForwardIcon } from '@chakra-ui/icons';
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

// const outlinePrimaryButtonStyleProps = {
// 	color: 'pink.700',
// 	bg: 'gray.100',
// 	border: '1px',
// 	borderColor: 'pink.700',
// 	variant: 'outline',
// 	_hover: { bg: 'pink.800', color: 'gray.100' },
// 	_active: {
// 		bg: 'pink.800',
// 		transform: 'scale(0.98)',
// 		borderColor: 'pink.800',
// 		color: 'gray.100',
// 	},
// };
// const solidSecondaryButtonStyleProps = {
// 	color: 'gray.700',
// 	bg: 'gray.400',
// 	_hover: { bg: 'gray.600', color: 'gray.800' },
// 	_active: {
// 		bg: 'gray.600',
// 		transform: 'scale(0.98)',
// 		borderColor: 'gray.600',
// 		color: 'gray.800',
// 	},
// };

// const outlineSecondaryButtonStyleProps = {
// 	color: 'gray.700',
// 	bg: 'gray.100',
// 	variant: 'outline',
// 	border: '1px',
// 	borderColor: 'gray.600',
// 	_hover: { bg: 'gray.600', color: 'gray.800' },
// 	_active: {
// 		bg: 'gray.600',
// 		transform: 'scale(0.98)',
// 		borderColor: 'gray.600',
// 		color: 'gray.800',
// 	},
// };

export const ButtonSolidPrimary = ({
	btnText,
	...props
}: {
	btnText: string;
	props: any;
}) => {
	return (
		<>
			<Button {...props} {...solidPrimaryButtonStyleProps} {...btnStyleProps}>
				{btnText}
			</Button>
		</>
	);
};

// export const ButtonOutlinePrimary = ({
// 	btnText,
// 	...props
// }: {
// 	btnText: string;
// }) => {
// 	return (
// 		<>
// 			<Button {...props} {...outlinePrimaryButtonStyleProps} {...btnStyleProps}>
// 				{btnText}
// 			</Button>
// 		</>
// 	);
// };

// export const ButtonSolidSecondary = ({
// 	btnText,
// 	...props
// }: {
// 	btnText: string;
// }) => {
// 	return (
// 		<>
// 			<Button {...props} {...solidSecondaryButtonStyleProps} {...btnStyleProps}>
// 				{btnText}
// 			</Button>
// 		</>
// 	);
// };

// export const ButtonOutlineSecondary = ({
// 	btnText,
// 	...props
// }: {
// 	btnText: string;
// }) => {
// 	return (
// 		<>
// 			<Button
// 				{...props}
// 				{...outlineSecondaryButtonStyleProps}
// 				{...btnStyleProps}>
// 				{btnText}
// 			</Button>
// 		</>
// 	);
// };

export const NextButton = ({ btnText, ...props }: { btnText: string }) => {
	return (
		<Button
			rightIcon={<ArrowForwardIcon />}
			{...btnStyleProps}
			{...nextButtonStyleProps}
			{...props}
			onClick={() => {
				console.log('clicked');
			}}>
			{btnText}
		</Button>
	);
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
