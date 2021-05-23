import { Button } from '@chakra-ui/button';
import { Box, Heading } from '@chakra-ui/layout';
import { Link } from 'react-router-dom';
import { useStateContext } from '../../Context';
import { btnStyleProps, solidPrimaryButtonStyleProps } from '../utils';

export const Dashboard = () => {
	const {
		state: { scoreBoard },
	} = useStateContext();

	const scoreListWrapperProps = {
		transition: 'all 0.2s cubic-bezier(.08,.52,.52,1)',
		_hover: {
			transform: 'scale(1.01)',
		},
		d: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		minH: '5rem',
		borderRadius: 'xl',
		padding: '1rem',
		borderWidth: '2px',
		mb: '1rem',
	};

	const scoreTextWrapperProps = {
		fontWeight: '500',
		boxShadow: 'md',
		p: '0.5rem 1rem',
		borderRadius: 'xl',
	};
	return (
		<Box padding='1rem' maxW='56rem' margin='auto'>
			<Heading textAlign='center' pt='1rem'>
				Progress Dashboard
			</Heading>
			{scoreBoard.length === 0 ? (
				<Box as='h4' fontSize='xl' textAlign='center' pt='2rem'>
					No Quiz Attempted
				</Box>
			) : (
				<Box pt='2rem'>
					{scoreBoard.map((data) => {
						return (
							<Link to={`/quiz/${data.quizId}`}>
								<Box
									{...scoreListWrapperProps}
									borderColor={
										data.scoreStatus === 'PASS' ? '#B5DCCD' : '#FCBCBC'
									}>
									<Box>
										<Heading fontSize='lg'>{data.quizName}</Heading>
										<Button
											mt='1rem'
											{...btnStyleProps}
											{...solidPrimaryButtonStyleProps}>
											Retake
										</Button>
									</Box>
									<Box
										{...scoreTextWrapperProps}
										bg={data.scoreStatus === 'PASS' ? '#B5DCCD' : '#FCBCBC'}>
										<Box as='span' pr='1rem'>
											{data.score}
										</Box>
										{data.scoreStatus}
									</Box>
								</Box>
							</Link>
						);
					})}
				</Box>
			)}
		</Box>
	);
};
