import { Heading, SimpleGrid } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import { useQuiz } from '../../Context';
import { quizes } from '../../database';
import { AttemptContainer } from '../AttemptContainer';

import { QuestionContainer } from './QuestionContainer';
import { QuizInstructions } from './QuizInstructions';

export const QuizContainer = () => {
	const {
		state: { currentQuestionNumber },
		dispatch,
	} = useQuiz();

	const [quiz, setQuiz] = useState<Quiz | null | undefined>(null);

	const { quizId } = useParams();

	const [showResult, setShowResult] = useState(false);
	const [showQuiz, setShowQuiz] = useState(false);

	useEffect(() => {
		const quizDetails = quizes.find((quiz) => quiz._id === quizId);
		if (quizDetails) {
			dispatch({ type: 'SET_ATTEMPT', payload: quizDetails });
		}
		setQuiz(quizDetails);

		return () => {
			dispatch({ type: 'RESET' });
		};
	}, []);

	return (
		<>
			{quiz === null && 'loading...'}
			{quiz === undefined && 'quiz not found'}
			{!showResult && quiz && (
				<>
					{!showQuiz ? (
						<QuizInstructions quiz={quiz} setShowQuiz={setShowQuiz} />
					) : (
						<>
							<Heading mt='2rem' px='1.5rem' textAlign='center'>
								{quiz.name}
							</Heading>
							<SimpleGrid
								columns={[1, 2, 2]}
								gap={'1.5rem'}
								px='1.5rem'
								textAlign='center'
								my='2rem'>
								<QuestionContainer
									key={quiz.questions[currentQuestionNumber - 1]._id}
									question={quiz.questions[currentQuestionNumber - 1]}
									setShowResult={setShowResult}
								/>
							</SimpleGrid>
						</>
					)}
				</>
			)}
			{showResult && <AttemptContainer />}
		</>
	);
};
