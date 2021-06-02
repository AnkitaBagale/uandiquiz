import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import { useQuizData } from '../../Context';
import { API_URL } from '../../utils';
import { Quiz } from '../../Context/QuizContext/Quiz.type';
import { AttemptedQuizContainer } from '../AttemptedQuizContainer';
import { Heading } from '@chakra-ui/react';

import { QuestionContainer } from './QuestionContainer';
import { QuizInstructions } from './QuizInstructions';

export const QuizContainer = () => {
	const {
		quizState: { currentQuestionNumber },
		quizDispatch,
	} = useQuizData();

	const [quiz, setQuiz] = useState<Quiz | null>(null);

	const { quizId } = useParams();
	const [showResult, setShowResult] = useState(false);
	const [showQuiz, setShowQuiz] = useState(false);

	useEffect(() => {
		(async () => {
			try {
				const {
					data: { response },
				} = await axios.get<{ response: Quiz }>(`${API_URL}/quizzes/${quizId}`);
				quizDispatch({ type: 'SET_ATTEMPT', payload: { quiz: response } });
				setQuiz(response);
			} catch (error) {
				console.log(error);
			}
		})();

		return () => {
			quizDispatch({ type: 'RESET' });
		};
	}, [quizDispatch, quizId]);

	return (
		<>
			{quiz === null && 'loading...'}

			{!showResult && quiz && (
				<>
					{!showQuiz ? (
						<QuizInstructions quizName={quiz.name} setShowQuiz={setShowQuiz} />
					) : (
						<>
							<Heading mt='2rem' px='1.5rem' textAlign='center'>
								{quiz.name}
							</Heading>
							<QuestionContainer
								key={quiz.questions[currentQuestionNumber - 1]._id}
								question={quiz.questions[currentQuestionNumber - 1]}
								setShowResult={setShowResult}
							/>
						</>
					)}
				</>
			)}
			{showResult && <AttemptedQuizContainer />}
		</>
	);
};
