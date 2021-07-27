export const navWrapperStyleProps = {
	bg: 'white',
	color: 'gray.800',
	minH: '60px',
	py: { base: 2 },
	px: { base: '1.5rem' },
	borderBottom: 1,
	borderStyle: 'solid',
	borderColor: 'gray.200',
	align: 'center',
	justifyContent: 'space-between',
};

export const iconWrapperStyleProps = {
	flex: { base: 1, md: 'auto' },
	ml: { base: -2 },
	display: { base: 'flex', md: 'none' },
};

export const avatarWrapperStyleProps: any = {
	as: 'span',
	_hover: {
		bg: 'gray.100',
	},
	p: 0,
};

export const avatarStyleProps = {
	size: 'sm',
	bg: 'gray.700',
	_hover: {
		bg: 'gray.800',
	},
};

export const navItemLabelStyleProps: any = {
	as: 'span',
	p: 2,
	fontSize: '1rem',
	fontWeight: 400,
	color: 'gray.800',
	_hover: {
		textDecoration: 'none',
		color: 'pink.800',
	},
};

export const mobileNavItemWrapperStyleProps = {
	py: 2,
	justify: 'space-between',
	align: 'center',
	_hover: {
		textDecoration: 'none',
	},
};

export const logoTitleStyleProps = {
	fontSize: '2rem',
	fontFamily: 'Roboto Slab',
	fontWeight: '500',
	color: 'pink.800',
};

export const AndSymbolStyleProps = {
	fontSize: '1rem',
	marginRight: '0.1875rem',
	color: 'gray.800',
};

export const logoTaglineStyleProps = {
	fontSize: '0.625rem',
	fontWeight: '500',
	letterSpacing: '1px',
	color: 'gray.800',
	display: { base: 'none', md: 'block', lg: 'block', xl: 'block' },
};
