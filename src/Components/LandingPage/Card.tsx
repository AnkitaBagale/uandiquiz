import { Box, Image, Tag, TagLabel } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { ButtonSolidPrimarySizeSmall } from '../Buttons';

export const Card = ({ quiz }: QuizCardProps) => {
	return (
		<>
			<Link to={`/quiz/${quiz._id}`}>
				<Box
					maxW='sm'
					borderRadius='1.5rem'
					overflow='hidden'
					mx='auto'
					boxShadow='md'>
					<Image
						src={quiz.image}
						alt={quiz.name}
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
								{quiz.type}
							</Box>
							<Box>
								<Tag
									size='sm'
									colorScheme='green'
									borderRadius='full'
									px='1rem'
									mt='0.25rem'>
									<TagLabel>{quiz.level}</TagLabel>
								</Tag>
								<Tag
									size='sm'
									colorScheme='green'
									borderRadius='full'
									px='1rem'
									mt='0.25rem'
									ml='0.5rem'>
									<TagLabel>Free</TagLabel>
								</Tag>
							</Box>
						</Box>

						<ButtonSolidPrimarySizeSmall btnText='Play now' />
					</Box>
				</Box>
			</Link>
		</>
	);
};
