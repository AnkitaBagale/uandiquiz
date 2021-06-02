import { Button } from '@chakra-ui/button';
import { Box, Heading, Text } from '@chakra-ui/layout';
import { Link } from 'react-router-dom';
import { btnStyleProps, solidPrimaryButtonStyleProps } from '../utils';
import { headingStyleProps } from './utils';

export const ThankYouScreen = ({ message }: { message: string }) => {
	return (
		<Box textAlign='center'>
			<Heading {...headingStyleProps}>{message}</Heading>
			<Text mb='1rem' fontSize='x-large'>
				Please login to continue.
			</Text>
			<Link to='/login'>
				<Button as='span' {...btnStyleProps} {...solidPrimaryButtonStyleProps}>
					Login
				</Button>
			</Link>
		</Box>
	);
};
