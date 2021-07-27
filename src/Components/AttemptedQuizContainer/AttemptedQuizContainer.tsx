import { Box, SimpleGrid } from '@chakra-ui/layout';
import { useQuizData } from '../../Context';
import { Question } from '../../Context/QuizContext/Quiz.type';
import { RecommendedSection } from '../RecommendedSection';
import { AnswerContainer } from './AnswerContainer';
import { QuizResultSection } from './QuizResultSection';
import { gridStyleProps } from './utils';

export const AttemptedQuizContainer = () => {
	const {
		quizState: { attemptedQuiz },
	} = useQuizData();

	return (
		<>
			{attemptedQuiz && (
				<Box mt='2rem'>
					<QuizResultSection />
					<SimpleGrid textAlign='center' px='1.5rem' {...gridStyleProps}>
						{attemptedQuiz.questions.map(
							(question: Question, index: number): JSX.Element => (
								<AnswerContainer
									key={question._id}
									question={question}
									questionNumber={index}
								/>
							),
						)}
					</SimpleGrid>
					<RecommendedSection type={attemptedQuiz.category} />
				</Box>
			)}
		</>
	);
};
