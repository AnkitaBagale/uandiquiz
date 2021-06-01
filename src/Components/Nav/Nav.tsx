import {
	Box,
	Flex,
	IconButton,
	Collapse,
	useDisclosure,
	Avatar,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

import {
	iconWrapperStyleProps,
	navWrapperStyleProps,
	avatarStyleProps,
	avatarWrapperStyleProps,
} from './nav-style-props';
import { Logo } from './Logo';

import { DesktopNav } from './DesktopNav';
import { MobileNav } from './MobileNav';
import { Link } from 'react-router-dom';

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
						<Logo />
						<Flex display={{ base: 'none', md: 'flex' }} ml={10}>
							<DesktopNav />
						</Flex>
					</Flex>
				</Flex>
				<Link to='/login'>
					<Box as='span' {...avatarWrapperStyleProps}>
						<Avatar
							as='span'
							{...avatarStyleProps}
							src='https://bit.ly/broken-link'
						/>
					</Box>
				</Link>
			</Flex>

			<Collapse in={isOpen} animateOpacity>
				<MobileNav />
			</Collapse>
		</Box>
	);
};
