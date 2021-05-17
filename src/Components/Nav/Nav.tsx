import {
	Box,
	Flex,
	Text,
	IconButton,
	Button,
	Stack,
	Collapse,
	useDisclosure,
	Avatar,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';

import './nav.css';

const NAV_ITEMS: Array<NavItem> = [
	{
		label: 'Home',
		href: '/',
	},
	{
		label: 'About',
		href: '/about',
	},
];

export const Nav = () => {
	const { isOpen, onToggle } = useDisclosure();

	return (
		<Box position='sticky' top='0' zIndex={1}>
			<Flex
				bg='white'
				color='gray.800'
				minH={'60px'}
				py={{ base: 2 }}
				px={{ base: '1.5rem' }}
				borderBottom={1}
				borderStyle={'solid'}
				borderColor='gray.200'
				align={'center'}
				justifyContent='space-between'>
				<Flex alignItems='center'>
					<Flex
						flex={{ base: 1, md: 'auto' }}
						ml={{ base: -2 }}
						display={{ base: 'flex', md: 'none' }}>
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

				<Button
					href={'#'}
					_hover={{
						bg: 'gray.100',
					}}
					p={0}>
					<Avatar
						size='sm'
						bg={'gray.700'}
						_hover={{
							bg: 'gray.800',
						}}
						src='https://bit.ly/broken-link'
					/>
				</Button>
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
						<Button
							p={2}
							fontSize={'1rem'}
							fontWeight={400}
							color='gray.800'
							_hover={{
								textDecoration: 'none',
								color: 'pink.800',
							}}>
							{navItem.label}
						</Button>
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
			<Flex
				py={2}
				justify={'space-between'}
				align={'center'}
				_hover={{
					textDecoration: 'none',
				}}>
				<Text fontWeight={400} color='gray.800'>
					{label}
				</Text>
			</Flex>
		</Stack>
	);
};
