import { isSelectedOptionRight } from '../../../utils';
import { InitialStateType, ActionType, ScoreData } from '../QuizContext.type';

export const quizDataReducer = (
	state: InitialStateType,
	action: ActionType,
): InitialStateType => {
	switch (action.type) {
		case 'SET_ATTEMPT': {
			return {
				...state,
				attemptedQuiz: {
					...action.payload.quiz,
					score: 0,
				},
			};
		}

		case 'SET_CATEGORIES': {
			return { ...state, categories: action.payload.categories };
		}
		case 'SET_FEATURED_QUIZZES': {
			return { ...state, featuredQuizzes: action.payload.featuredQuizzes };
		}
		case 'INCREMENT_QUESTION_NUMBER': {
			return {
				...state,
				currentQuestionNumber: state.currentQuestionNumber + 1,
			};
		}

		case 'CALCULATE_SCORE': {
			if (state.attemptedQuiz) {
				const score = state.attemptedQuiz.questions.reduce(
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
					quizId: state.attemptedQuiz._id,
					quizName: state.attemptedQuiz.name,
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
					...state,
					attemptedQuiz: {
						...state.attemptedQuiz,
						score,
					},
					scoreBoard: [...state.scoreBoard, scoreData],
				};
			} else {
				throw new Error('No quiz attempted');
			}
		}

		case 'SELECT_OPTION': {
			if (state.attemptedQuiz) {
				const updatedQuestions = state.attemptedQuiz.questions.map(
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
					...state,
					attemptedQuiz: {
						...state.attemptedQuiz,
						questions: updatedQuestions,
					},
				};
			} else {
				throw new Error('No quiz attempted');
			}
		}
		case 'RESET': {
			return {
				...state,
				attemptedQuiz: null,
				currentQuestionNumber: 1,
			};
		}

		default:
			throw new Error('Unhandled type of action');
	}
};
