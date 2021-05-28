import { Flex, Text, Stack } from '@chakra-ui/react';
import { mobileNavItemWrapperStyleProps } from './nav-style-props';

import { NAV_ITEMS } from './nav-items';

import { Link } from 'react-router-dom';
import { NavItem } from './NavItem.type';

export const MobileNav = () => {
	return (
		<Stack bg='white' px={6} py={4} display={{ md: 'none' }} boxShadow='md'>
			{NAV_ITEMS.map(
				(navItem: NavItem): JSX.Element => (
					<MobileNavItem key={navItem.label} {...navItem} />
				),
			)}
		</Stack>
	);
};

const MobileNavItem = ({ label, href }: NavItem) => {
	return (
		<Link to={href}>
			<Stack spacing={4}>
				<Flex {...mobileNavItemWrapperStyleProps}>
					<Text fontWeight={400} color='gray.800'>
						{label}
					</Text>
				</Flex>
			</Stack>
		</Link>
	);
};
