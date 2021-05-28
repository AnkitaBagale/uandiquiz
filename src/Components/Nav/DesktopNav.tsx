import { NavItem } from './NavItem.type';
import { Link } from 'react-router-dom';

import { NAV_ITEMS } from './nav-items';
import { navItemLabelStyleProps } from './nav-style-props';
import { Box, Flex } from '@chakra-ui/react';

export const DesktopNav = () => {
	return (
		<Flex alignItems='center' spacing={4}>
			{NAV_ITEMS.map(
				(navItem: NavItem): JSX.Element => (
					<Link to={navItem.href} key={navItem.label}>
						<Box {...navItemLabelStyleProps}>{navItem.label}</Box>
					</Link>
				),
			)}
		</Flex>
	);
};
