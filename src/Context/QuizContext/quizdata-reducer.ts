import { isSelectedOptionRight } from '../../utils';

export const initialState: InitialStateType = {
	attempt: null,
	currentQuestionNumber: 1,
};

export const quizReducer = (
	state: InitialStateType,
	action: ActionType,
): typeof initialState => {
	switch (action.type) {
		case 'SET_ATTEMPT': {
			return {
				...state,
				attempt: {
					...action.payload,
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
			if (state.attempt) {
				const score = state.attempt.questions.reduce(
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
					attempt: {
						...state.attempt,
						score,
					},
				};
			}

			return state;
		}

		case 'SELECT_OPTION': {
			if (state.attempt) {
				const updatedQuestions = state.attempt.questions.map((question) => {
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
				});

				return {
					...state,
					attempt: {
						...state.attempt,
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
