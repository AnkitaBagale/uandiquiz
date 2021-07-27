import { isSelectedOptionRight } from '../../../utils';
import { InitialStateType, QuizAction, ScoreData } from '../QuizContext.type';

export const quizDataReducer = (
	quizState: InitialStateType,
	action: QuizAction,
): InitialStateType => {
	switch (action.type) {
		case 'SET_ATTEMPT': {
			return {
				...quizState,
				attemptedQuiz: {
					...action.payload.quiz,
					score: 0,
				},
			};
		}

		case 'SET_CATEGORIES': {
			return { ...quizState, categories: action.payload.categories };
		}
		case 'SET_FEATURED_QUIZZES': {
			return { ...quizState, featuredQuizzes: action.payload.featuredQuizzes };
		}
		case 'INCREMENT_QUESTION_NUMBER': {
			return {
				...quizState,
				currentQuestionNumber: quizState.currentQuestionNumber + 1,
			};
		}

		case 'CALCULATE_SCORE': {
			if (quizState.attemptedQuiz) {
				const score = quizState.attemptedQuiz.questions.reduce(
					(totalScore: number, { negativePoints, points, options }): number => {
						if (isSelectedOptionRight(options)) {
							return totalScore + points;
						}
						return negativePoints ? totalScore - negativePoints : totalScore;
					},
					0,
				);

				const scoreData: ScoreData = {
					score: score,
					quizId: quizState.attemptedQuiz._id,
					quizName: quizState.attemptedQuiz.name,
					scoreStatus: score >= 70 ? 'PASS' : 'FAIL',
				};

				const scoreDataFromLocalStorage = localStorage.getItem('scoreBoard');
				if (scoreDataFromLocalStorage) {
					const scoreBoardData = JSON.parse(scoreDataFromLocalStorage);
					scoreBoardData.scores.push(scoreData);
					localStorage.setItem('scoreBoard', JSON.stringify(scoreBoardData));
				} else {
					localStorage.setItem(
						'scoreBoard',
						JSON.stringify({ scores: [scoreData] }),
					);
				}

				return {
					...quizState,
					attemptedQuiz: {
						...quizState.attemptedQuiz,
						score,
					},
					scoreBoard: [...quizState.scoreBoard, scoreData],
				};
			} else {
				throw new Error('No quiz attempted');
			}
		}

		case 'SELECT_OPTION': {
			if (quizState.attemptedQuiz) {
				const updatedQuestions = quizState.attemptedQuiz.questions.map(
					(question) => {
						if (question._id !== action.payload.questionId) {
							return question;
						} else {
							return {
								...question,
								options: question.options.map((option) =>
									option._id !== action.payload.optionId
										? { ...option, isSelected: false }
										: { ...option, isSelected: true },
								),
							};
						}
					},
				);

				return {
					...quizState,
					attemptedQuiz: {
						...quizState.attemptedQuiz,
						questions: updatedQuestions,
					},
				};
			} else {
				throw new Error('No quiz attempted');
			}
		}
		case 'RESET': {
			return {
				...quizState,
				attemptedQuiz: null,
				currentQuestionNumber: 1,
			};
		}

		default:
			throw new Error('Unhandled type of action');
	}
};
