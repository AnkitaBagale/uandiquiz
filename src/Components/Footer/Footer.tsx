import { ButtonGroup, IconButton } from '@chakra-ui/button';
import { Box, Text } from '@chakra-ui/layout';
import { SocialShareIcon } from './SocialShareIcon.type';
import { socialShareIcons } from './social-share-icons';
import {
	buttonGroupStyleProps,
	copyRightTextStyleProps,
	footerWrapperStyleProps,
	iconStyleProps,
} from './utils';

export const Footer = () => {
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
				<ButtonGroup {...buttonGroupStyleProps}>
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

				<Text {...copyRightTextStyleProps}>
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
