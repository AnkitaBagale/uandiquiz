export const optionsGridStyleProps = {
	columns: [2, 2, 2],
	gap: '1.5rem',
	mt: '2rem',
};

export const radioCardStyleProps = {
	boxShadow: 'md',
	cursor: 'pointer',
	borderWidth: '1px',
	borderRadius: 'md',
	bg: 'gray.400',
	color: 'gray.800',
	fontWeight: 'bold',
	_checked: {
		bg: 'pink.700',
		color: 'white',
		borderColor: 'pink.700',
		fontWeight: '400',
	},
	_hover: {
		bg: 'pink.700',
		color: 'white',
	},
	_focus: {
		boxShadow: 'outline',
	},
	p: '1rem',
};
