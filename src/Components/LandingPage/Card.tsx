import { Box, Image, Tag, TagLabel } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { Quiz } from '../../database/Quiz.type';
import { ButtonSolidPrimarySizeSmall } from '../Buttons';

export const Card = ({ quiz }: { quiz: Quiz }) => {
	return (
		<>
			<Link to={`/quiz/${quiz._id}`}>
				<Box
					height={'100%'}
					maxW='sm'
					borderRadius='1.5rem'
					overflow='hidden'
					mx='auto'
					boxShadow='md'
					textAlign='center'>
					<Image
						src={quiz.image}
						alt={quiz.name}
						height='6rem'
						width='100%'
						objectFit='cover'
					/>

					<Box
						height='calc(100% - 6rem)'
						px='1rem'
						py='1rem'
						d='flex'
						flexDirection='column'>
						<Box
							fontWeight='semibold'
							as='h4'
							lineHeight='tight'
							alignItems='center'>
							{quiz.name}
						</Box>

						<Box d='flex' flexWrap='wrap' justifyContent='center'>
							<Tag
								size='sm'
								colorScheme='green'
								borderRadius='full'
								px='1rem'
								mt='0.25rem'>
								<TagLabel>{quiz.type}</TagLabel>
							</Tag>
							<Tag
								size='sm'
								colorScheme='green'
								borderRadius='full'
								px='1rem'
								ml='0.5rem'
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
						<Box mt='1rem'>
							<ButtonSolidPrimarySizeSmall btnText='Play now' />
						</Box>
					</Box>
				</Box>
			</Link>
		</>
	);
};
