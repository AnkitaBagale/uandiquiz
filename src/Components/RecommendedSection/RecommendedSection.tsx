import { Button } from '@chakra-ui/button';
import { Box, Heading, SimpleGrid } from '@chakra-ui/layout';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { APIURL } from '../../utils';
import { btnStyleProps, solidPrimaryButtonStyleProps } from '../utils';
import { Video } from './Video.type';
import { VideoCard } from './VideoCard';

export const RecommendedSection = ({ type }: { type: string }) => {
	const [videos, setVideos] = useState<Video[] | null>(null);

	const gridProps = {
		columns: [1, 2, 3],
		gap: '1.5rem',
		px: '1rem',
		maxW: '67rem',
		margin: 'auto',
	};

	useEffect(() => {
		(async () => {
			try {
				const url = `${APIURL}/videos/type/${type}`;
				const {
					data: { response },
				} = await axios.get(url);

				setVideos(response);
			} catch (error) {
				console.log(error);
			}
		})();
	}, [type]);
	return (
		<>
			{videos && videos.length !== 0 && (
				<Box textAlign='center' mt='5rem' mb='5rem'>
					<Heading
						fontSize={{ md: 'xx-large', base: 'x-large' }}
						fontWeight='400'
						textAlign='center'
						mb='2rem'>
						Improve yourself by watching {type} videos
					</Heading>
					<SimpleGrid {...gridProps} mb='2rem'>
						{videos.map(
							(video: Video): JSX.Element => (
								<VideoCard video={video} key={video._id}></VideoCard>
							),
						)}
					</SimpleGrid>
					<Button
						{...solidPrimaryButtonStyleProps}
						{...btnStyleProps}
						as='a'
						target='_blank'
						href={`https://deploy-preview-1--u-and-i-video-library.netlify.app/explore/?type=${type}`}>
						Show More
					</Button>
				</Box>
			)}
		</>
	);
};
