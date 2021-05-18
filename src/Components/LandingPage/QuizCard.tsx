import { Box, Image, Tag, TagLabel } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { Quiz } from '../../database/Quiz.type';
import {
	ButtonSolidPrimarySizeSmall,
	tagStyleProps,
	imageStyleProps,
	cardTitleProps,
	flexStyleProps,
	cardWrapperStyleProps,
} from '../utils';

export const QuizCard = ({ quiz }: { quiz: Quiz }) => {
	return (
		<>
			<Link to={`/quiz/${quiz._id}`}>
				<Box {...cardWrapperStyleProps}>
					<Image src={quiz.image} alt={quiz.name} {...imageStyleProps} />

					<Box {...flexStyleProps}>
						<Box>
							<Box textAlign='left' {...cardTitleProps}>
								{quiz.name}
							</Box>
							<Box textAlign='left'>
								<Tag {...tagStyleProps}>
									<TagLabel>{quiz.type}</TagLabel>
								</Tag>
								<Tag {...tagStyleProps}>
									<TagLabel>{quiz.level}</TagLabel>
								</Tag>
							</Box>
						</Box>
						<Box textAlign='center' my='1rem'>
							<ButtonSolidPrimarySizeSmall btnText='Play now' />
						</Box>
					</Box>
				</Box>
			</Link>
		</>
	);
};
