import { Heading, SimpleGrid } from '@chakra-ui/layout';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { APIURL } from '../../database';
import { CategoryFromDb, QuizCardFromDb } from '../../database/Quiz.type';
import { QuizCard } from '../LandingPage/QuizCard';

export const CategoryLandingPage = () => {
	const { categoryId } = useParams();
	const [categoryDetails, setCategoryDetails] =
		useState<CategoryFromDb | null>(null);

	const gridProps = {
		columns: [1, 2, 3],
		gap: '2rem',
		px: '1.5rem',
		maxW: '67rem',
		margin: 'auto',
	};

	useEffect(() => {
		(async () => {
			try {
				const {
					data: { response },
				} = await axios.get<{ response: CategoryFromDb }>(
					`${APIURL}/categories/${categoryId}`,
				);

				setCategoryDetails(response);
			} catch (error) {
				console.log(error);
			}
		})();
	}, [categoryId]);

	return (
		<>
			{categoryDetails && (
				<>
					<Heading
						pt='2rem'
						pb='3rem'
						px='1.5rem'
						textAlign='center'
						id='explore'>
						{categoryDetails.name} Quizzes
					</Heading>

					{categoryDetails.quizzes &&
						(categoryDetails.quizzes.length > 0 ? (
							<SimpleGrid {...gridProps} mb='5rem'>
								{categoryDetails.quizzes.map(
									(quiz: QuizCardFromDb): JSX.Element => (
										<QuizCard key={quiz._id} quiz={quiz} />
									),
								)}
							</SimpleGrid>
						) : (
							<Heading
								fontSize='x-large'
								pt='2rem'
								pb='3rem'
								px='1.5rem'
								textAlign='center'
								id='explore'>
								Coming Soon...
							</Heading>
						))}
				</>
			)}
		</>
	);
};
