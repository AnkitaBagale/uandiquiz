import { Button } from '@chakra-ui/button';
import { Image } from '@chakra-ui/image';
import { Box, Heading, SimpleGrid, Text } from '@chakra-ui/layout';
import { btnStyleProps, solidPrimaryButtonStyleProps } from '../Buttons';
import promo from './assets/promo.png';

export const Header = () => {
	return (
		<>
			<SimpleGrid columns={[1, 2, 2]} mb='5rem' px='1.5rem'>
				<Box textAlign='center' padding='4rem 0rem 2rem'>
					<Heading
						fontFamily='Roboto Slab'
						letterSpacing='1px'
						fontWeight='500'>
						<Box color='pink.800' as='span'>
							U
						</Box>
						<Box as='span' fontSize='1rem'>
							&
						</Box>
						<Box color='pink.800' as='span' pr='3px'>
							I
						</Box>
						Quiz
					</Heading>

					<Text fontSize='xx-large' mt='1rem'>
						Bored? Want to have fun?
					</Text>
					<Text fontSize='xx-large'>
						Take a Quiz and Enjoy learning with Fun
					</Text>
					<Button
						as='a'
						href='#explore'
						mt='1rem'
						{...btnStyleProps}
						{...solidPrimaryButtonStyleProps}>
						Explore Quizes
					</Button>
				</Box>
				<Box>
					<Image
						src={promo}
						alt='promo'
						height='auto'
						width='100%'
						objectFit='cover'
					/>
				</Box>
			</SimpleGrid>
		</>
	);
};
