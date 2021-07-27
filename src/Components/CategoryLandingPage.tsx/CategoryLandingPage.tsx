import { Heading, SimpleGrid } from '@chakra-ui/layout';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { API_URL } from '../../utils';
import {
	CategoryFromDb,
	QuizCardFromDb,
} from '../../Context/QuizContext/Quiz.type';
import { QuizCard } from '../LandingPage';
import { gridStyleProps, headingStyleProps } from './utils';

export const CategoryLandingPage = () => {
	const { categoryId } = useParams();

	const [categoryDetails, setCategoryDetails] =
		useState<CategoryFromDb | null>(null);

	useEffect(() => {
		(async () => {
			try {
				const {
					data: { response },
				} = await axios.get<{ response: CategoryFromDb }>(
					`${API_URL}/categories/${categoryId}`,
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
					<Heading textAlign='center' {...headingStyleProps}>
						{categoryDetails.name} Quizzes
					</Heading>

					{categoryDetails.quizzes &&
						(categoryDetails.quizzes.length > 0 ? (
							<SimpleGrid {...gridStyleProps}>
								{categoryDetails.quizzes.map(
									(quiz: QuizCardFromDb): JSX.Element => (
										<QuizCard key={quiz._id} quiz={quiz} />
									),
								)}
							</SimpleGrid>
						) : (
							<Heading
								textAlign='center'
								as='h3'
								fontSize='x-large'
								{...headingStyleProps}
								id='explore'>
								Coming Soon...
							</Heading>
						))}
				</>
			)}
		</>
	);
};
