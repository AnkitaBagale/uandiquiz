import { Box, Image, Link, Tag, TagLabel } from '@chakra-ui/react';
import {
	cardTitleProps,
	cardWrapperStyleProps,
	flexStyleProps,
	imageStyleProps,
	tagStyleProps,
	externalLinkStyleProps,
} from '../utils';
import { ButtonSolidPrimarySizeSmall } from '../utils/Buttons';
import { Video } from './Video.type';

export const VideoCard = ({ video }: { video: Video }) => {
	return (
		<>
			<Link
				{...externalLinkStyleProps}
				href={`https://deploy-preview-1--u-and-i-video-library.netlify.app/explore/${video._id}`}>
				<Box {...cardWrapperStyleProps}>
					<Image src={video.thumbnail} alt={video.name} {...imageStyleProps} />

					<Box {...flexStyleProps}>
						<Box>
							<Box textAlign='left' {...cardTitleProps}>
								{video.name}
							</Box>
							<Box textAlign='left'>
								<Tag {...tagStyleProps}>
									<TagLabel>{video.level}</TagLabel>
								</Tag>
								<Tag {...tagStyleProps}>
									<TagLabel>{video.type}</TagLabel>
								</Tag>
							</Box>
						</Box>

						<ButtonSolidPrimarySizeSmall btnText='Watch Now' />
					</Box>
				</Box>
			</Link>
		</>
	);
};
