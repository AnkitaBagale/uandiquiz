import { Avatar } from '@chakra-ui/avatar';
import { Button } from '@chakra-ui/button';
import { Box, Heading, SimpleGrid } from '@chakra-ui/layout';
import { useEffect, useState } from 'react';
import { useAuthentication } from '../../Context';
import { headingStyleProps } from '../CategoryLandingPage.tsx/utils/category-landing-page-style-props';
import { btnStyleProps, solidSecondaryButtonStyleProps } from '../utils';

export const Profile = () => {
	const [pageLoadingStatus, setStatus] = useState('');
	const {
		authenticationState: { userDetails, token },
		logOutUser,
		fetchUserDetails,
	} = useAuthentication();
	useEffect(() => {
		if (!userDetails && token) {
			(async () => {
				setStatus('LOADING');
				const message = await fetchUserDetails();
				if (message !== 'SUCCESS') {
					//setError to toast
				} else {
					setStatus('');
				}
			})();
		}
	}, [userDetails, token, fetchUserDetails]);

	return (
		<>
			<Heading textAlign='center' {...headingStyleProps}>
				Account
			</Heading>
			{pageLoadingStatus === 'LOADING' && 'Laoding...'}
			{userDetails && (
				<SimpleGrid
					margin='0 auto 2rem'
					justifyContent='center'
					columns={[1, 2, 2]}
					gap='2rem'>
					<Box textAlign='right'>
						<Avatar
							size='2xl'
							name={`${userDetails.firstname} ${userDetails.lastname}`}
							src='https://bit.ly/tioluwani-kolawole'
						/>
					</Box>
					<Box textAlign='left' mt='2rem'>
						<Box d='flex'>
							<Box fontWeight='500' pr='0.5rem'>
								Name:
							</Box>
							<Box>
								{userDetails.firstname} {userDetails.lastname}
							</Box>
						</Box>
						<Box d='flex'>
							<Box fontWeight='500' pr='0.5rem'>
								Email:
							</Box>
							<Box>{userDetails.email}</Box>
						</Box>
						<Button
							mt='1rem'
							{...btnStyleProps}
							{...solidSecondaryButtonStyleProps}
							onClick={() => logOutUser()}>
							Log out
						</Button>
					</Box>
				</SimpleGrid>
			)}
		</>
	);
};
