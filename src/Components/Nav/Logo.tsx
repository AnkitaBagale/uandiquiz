import { Box } from '@chakra-ui/react';
import {
	logoTitleStyleProps,
	AndSymbolStyleProps,
	logoTaglineStyleProps,
} from './nav-style-props';
import { Link } from 'react-router-dom';
import './nav.css';

export const Logo = () => {
	return (
		<Link to='/' className='link-no-style'>
			<Box as='span' {...logoTitleStyleProps}>
				U
				<Box as='span' {...AndSymbolStyleProps}>
					&
				</Box>
				I
			</Box>
			<Box {...logoTaglineStyleProps}>LET'S DESIGN TOGETHER</Box>
		</Link>
	);
};
