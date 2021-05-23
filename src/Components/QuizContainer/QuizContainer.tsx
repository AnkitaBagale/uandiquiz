import { Heading, SimpleGrid } from '@chakra-ui/react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import { useStateContext } from '../../Context';
import { APIURL } from '../../database';
import { Quiz } from '../../database/Quiz.type';
import { AttemptedQuizContainer } from '../AttemptedQuizContainer';

import { QuestionContainer } from './QuestionContainer';
import { QuizInstructions } from './QuizInstructions';

export const QuizContainer = () => {
	const {
		state: { currentQuestionNumber },
		dispatch,
	} = useStateContext();

	const [quiz, setQuiz] = useState<Quiz | null>(null);

	const { quizId } = useParams();
	const [showResult, setShowResult] = useState(false);
	const [showQuiz, setShowQuiz] = useState(false);

	useEffect(() => {
		(async () => {
			try {
				const {
					data: { response },
				} = await axios.get<{ response: Quiz }>(`${APIURL}/quizzes/${quizId}`);
				dispatch({ type: 'SET_ATTEMPT', payload: { quiz: response } });
				setQuiz(response);
			} catch (error) {
				console.log(error);
			}
		})();

		return () => {
			dispatch({ type: 'RESET' });
		};
	}, [dispatch, quizId]);

	return (
		<>
			{quiz === null && 'loading...'}

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
			{showResult && <AttemptedQuizContainer />}
		</>
	);
};
