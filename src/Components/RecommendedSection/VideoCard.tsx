import { Box, Button, Image, Tag, TagLabel } from '@chakra-ui/react';
import {
	btnStyleProps,
	solidPrimaryButtonStyleProps,
} from '../Buttons/Buttons';
import { Video } from './Video.type';

export const VideoCard = ({ video }: { video: Video }) => {
	return (
		<>
			<Box
				maxW='sm'
				borderRadius='1.5rem'
				overflow='hidden'
				mx='auto'
				boxShadow='md'>
				<Image
					src={video.thumbnail}
					alt={video.name}
					height='6rem'
					width='100%'
					objectFit='cover'
				/>

				<Box
					px='1rem'
					py='1rem'
					d='flex'
					alignItems='center'
					justifyContent='space-between'>
					<Box>
						<Box
							fontWeight='semibold'
							as='h4'
							lineHeight='tight'
							alignItems='center'>
							{video.name}
						</Box>
						<Box>
							<Tag
								size='sm'
								colorScheme='green'
								borderRadius='full'
								px='1rem'
								mt='0.25rem'>
								<TagLabel>{video.level}</TagLabel>
							</Tag>
							<Tag
								size='sm'
								colorScheme='green'
								borderRadius='full'
								px='1rem'
								mt='0.25rem'
								ml='0.5rem'>
								<TagLabel>{video.type}</TagLabel>
							</Tag>
						</Box>
					</Box>

					<Button
						{...solidPrimaryButtonStyleProps}
						{...btnStyleProps}
						fontSize='0.8rem'
						as='a'
						target='_blank'
						href={`https://deploy-preview-1--u-and-i-video-library.netlify.app/explore/${video._id}`}>
						Watch now
					</Button>
				</Box>
			</Box>
		</>
	);
};
