import { isSelectedOptionRight } from '../../../utils';
import { InitialStateType, ActionType } from '../QuizContext.type';
export const initialState: InitialStateType = {
	attemptedQuiz: null,
	currentQuestionNumber: 1,
};

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

				return {
					...state,
					attemptedQuiz: {
						...state.attemptedQuiz,
						score,
					},
				};
			}

			return state;
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
			}
			return state;
		}
		case 'RESET': {
			return {
				...initialState,
			};
		}

		default:
			return state;
	}
};
