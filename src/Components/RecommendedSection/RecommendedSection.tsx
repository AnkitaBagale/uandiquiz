import { Button } from '@chakra-ui/button';
import { Box, Heading, SimpleGrid } from '@chakra-ui/layout';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { btnStyleProps, solidPrimaryButtonStyleProps } from '../Buttons';
import { VideoCard } from './VideoCard';

export const RecommendedSection = ({ type }: RecommendedSectionProps) => {
	const [videos, setVideos] = useState<Video[] | null>(null);

	const gridProps = {
		columns: [1, 2, 3],
		gap: '1.5rem',
		px: '1rem',
	};

	useEffect(() => {
		(async () => {
			try {
				const url = 'https://uandistoreapi.herokuapp.com/videos/type/Painting';
				const {
					data: { response },
				} = await axios.get(url);

				setVideos(response);
			} catch (error) {
				console.log(error);
			}
		})();
	}, []);
	return (
		<>
			{videos && videos.length !== 0 && (
				<Box textAlign='center' mt='5rem' mb='5rem'>
					<Heading
						fontSize='xx-large'
						fontWeight='500'
						textAlign='center'
						mb='2rem'>
						Check out U&I videos to learn {type}
					</Heading>
					<SimpleGrid {...gridProps} mb='2rem'>
						{videos.map(
							(video: Video): JSX.Element => (
								<VideoCard video={video}></VideoCard>
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
