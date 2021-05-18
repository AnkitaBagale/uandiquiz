import { ButtonGroup, IconButton } from '@chakra-ui/button';
import { Box, Text } from '@chakra-ui/layout';
import { SocialShareIcon } from './SocialShareIcon.type';
import { socialShareIcons } from './social-share-icons';

export const Footer = () => {
	const iconStyleProps = {
		target: '_blank',
		fontSize: '1.5rem',
		_hover: {
			color: 'pink.900',
			bg: 'transparent',
		},
		_active: {
			color: 'pink.900',
			bg: 'transparent',
		},
	};

	const footerWrapperStyleProps = {
		role: 'contentinfo',
		mx: 'auto',
		width: '100%',
		p: '2rem',
		bg: 'violet.900',
		color: 'white',
	};
	return (
		<>
			<Box textAlign='center' as='footer' {...footerWrapperStyleProps}>
				<Text fontSize='1rem' letterSpacing='0.5px'>
					Made with{' '}
					<Text as='span' color='pink.800'>
						&lt;/&gt;
					</Text>{' '}
					by Ankita Bagale
				</Text>
				<ButtonGroup variant='ghost' color='gray.600' mt='0.5rem' mb='0.5rem'>
					{socialShareIcons.map(
						({ className, link, name }: SocialShareIcon): JSX.Element => (
							<IconButton
								as='a'
								key={className}
								href={link}
								aria-label={name}
								{...iconStyleProps}
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
