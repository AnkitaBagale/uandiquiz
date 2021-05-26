import {
	Box,
	Flex,
	Text,
	IconButton,
	Stack,
	Collapse,
	useDisclosure,
	Avatar,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';

import './nav.css';
import { NavItem } from './NavItem.type';
import {
	iconWrapperStyleProps,
	navWrapperStyleProps,
	avatarStyleProps,
	navItemLabelStyleProps,
	avatarWrapperStyleProps,
	mobileNavItemWrapperStyleProps,
} from './nav-style-props';

const NAV_ITEMS: Array<NavItem> = [
	{
		label: 'Home',
		href: '/',
	},
	{
		label: 'Dashboard',
		href: '/dashboard',
	},
];

export const Nav = () => {
	const { isOpen, onToggle } = useDisclosure();

	return (
		<Box position='sticky' top='0' zIndex={1}>
			<Flex {...navWrapperStyleProps}>
				<Flex alignItems='center'>
					<Flex {...iconWrapperStyleProps}>
						<IconButton
							onClick={onToggle}
							icon={
								isOpen ? (
									<CloseIcon w={4} h={4} />
								) : (
									<HamburgerIcon w={6} h={6} />
								)
							}
							variant={'ghost'}
							aria-label={'Toggle Navigation'}
						/>
					</Flex>
					<Flex justify={{ base: 'center', md: 'start' }}>
						<Link to='/' className='link-no-style'>
							<span className='primary-text-color logo-title'>
								U
								<span className='tertiary-text-color logo-and-symbol-style'>
									&
								</span>
								I
							</span>
							<span className='tertiary-text-color logo-tagline hide-in-mobile'>
								LET'S DESIGN TOGETHER
							</span>
						</Link>

						<Flex display={{ base: 'none', md: 'flex' }} ml={10}>
							<DesktopNav />
						</Flex>
					</Flex>
				</Flex>
				<>
					<Box {...avatarWrapperStyleProps}>
						<Avatar {...avatarStyleProps} src='https://bit.ly/broken-link' />
					</Box>
				</>
			</Flex>

			<Collapse in={isOpen} animateOpacity>
				<MobileNav />
			</Collapse>
		</Box>
	);
};

const DesktopNav = () => {
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

const MobileNav = () => {
	return (
		<Stack bg='white' px={6} py={4} display={{ md: 'none' }} boxShadow='md'>
			{NAV_ITEMS.map(
				(navItem: NavItem): JSX.Element => (
					<Link to={navItem.href} key={navItem.label}>
						<MobileNavItem {...navItem} />
					</Link>
				),
			)}
		</Stack>
	);
};

const MobileNavItem = ({ label, href }: NavItem) => {
	return (
		<Stack spacing={4}>
			<Flex {...mobileNavItemWrapperStyleProps}>
				<Text fontWeight={400} color='gray.800'>
					{label}
				</Text>
			</Flex>
		</Stack>
	);
};
