import { ButtonGroup, IconButton } from '@chakra-ui/button';
import { Box, Text } from '@chakra-ui/layout';

const faviconClassNames: SocialShareIcon[] = [
	{ className: 'fab fa-github', link: 'https://github.com/AnkitaBagale' },
	{ className: 'fab fa-twitter', link: 'https://twitter.com/AnkitaB1108' },
	{
		className: 'fab fa-linkedin-in',
		link: 'https://www.linkedin.com/in/ankita-bagale1108/',
	},
];

type SocialShareIcon = {
	className: string;
	link: string;
};

export const Footer = () => {
	return (
		<>
			<Box
				as='footer'
				textAlign='center'
				role='contentinfo'
				mx='auto'
				width={'100%'}
				p={'2rem'}
				bg='violet.900'
				color='white'>
				<Text fontSize='1rem' letterSpacing='0.5px'>
					Made with{' '}
					<Text as='span' color='pink.800'>
						&lt;/&gt;
					</Text>{' '}
					by Ankita Bagale
				</Text>
				<ButtonGroup variant='ghost' color='gray.600' mt='0.5rem' mb='0.5rem'>
					{faviconClassNames.map(
						({ className, link }: SocialShareIcon): JSX.Element => (
							<IconButton
								key={className}
								as='a'
								href={link}
								target='_blank'
								aria-label='LinkedIn'
								fontSize='1.5rem'
								_hover={{
									color: 'pink.900',
									bg: 'transparent',
								}}
								_active={{
									color: 'pink.900',
									bg: 'transparent',
								}}
								icon={<i className={className}></i>}
							/>
						),
					)}
				</ButtonGroup>

				<Text fontSize='0.875rem' fontWeight='300' color='violet.300'>
					© 2021 U
					<Text as='span' color='pink.800' fontSize='0.75rem'>
						&
					</Text>
					I Designs
				</Text>
			</Box>
		</>
	);
};
