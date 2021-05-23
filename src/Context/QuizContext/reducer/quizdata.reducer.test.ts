import { ActionType, InitialStateType, ScoreData } from '../QuizContext.type';
import { quizDataReducer } from './quizdata.reducer';

describe('testing quiz dispatch', () => {
	test('should set the attempted quiz in the context on SET_ATTEMPT dispatch', () => {
		//Arrange
		const initialState: InitialStateType = {
			attemptedQuiz: null,
			currentQuestionNumber: 1,
		} as InitialStateType;

		const action: ActionType = {
			type: 'SET_ATTEMPT',
			payload: {
				quiz: {
					_id: '124',
					name: 'Painting And Decorating Quiz',
					totalQuestions: 2,
					score: 0,
					questions: [
						{
							_id: '1',
							question: 'Who painted this series?',
							image: '',
							points: 10,
							options: [
								{ _id: '1', text: 'Andy Warhol', isRight: true },
								{ _id: '2', text: 'Andy Carpenter', isRight: false },
							],
						},

						{
							_id: '2',
							question: 'What is the name of this mysterious painting?',
							image: '',
							points: 10,
							options: [
								{ _id: '1', text: 'Mona Lisa', isRight: true },
								{ _id: '2', text: 'Lisa Lisa', isRight: false },
							],
						},
					],

					category: 'Painting',
					level: 'Level 2',
					highScore: [
						{ _id: '1', userId: '123', score: 25 },
						{ _id: '2', userId: '124', score: 23 },
					],
					image: '',
				},
			},
		};

		const finalState: InitialStateType = {
			attemptedQuiz: {
				_id: '124',
				name: 'Painting And Decorating Quiz',
				totalQuestions: 2,
				score: 0,
				questions: [
					{
						_id: '1',
						question: 'Who painted this series?',
						image: '',
						points: 10,
						options: [
							{ _id: '1', text: 'Andy Warhol', isRight: true },
							{ _id: '2', text: 'Andy Carpenter', isRight: false },
						],
					},

					{
						_id: '2',
						question: 'What is the name of this mysterious painting?',
						image: '',
						points: 10,
						options: [
							{ _id: '1', text: 'Mona Lisa', isRight: true },
							{ _id: '2', text: 'Lisa Lisa', isRight: false },
						],
					},
				],

				category: 'Painting',
				level: 'Level 2',
				highScore: [
					{ _id: '1', userId: '123', score: 25 },
					{ _id: '2', userId: '124', score: 23 },
				],
				image: '',
			},
			currentQuestionNumber: 1,
		} as InitialStateType;

		//Act
		const computedState = quizDataReducer(initialState, action);

		//Assert
		expect(computedState).toEqual(finalState);
	});

	test('should increment current question number on INCREMENT_QUESTION_NUMBER dispatch', () => {
		//Arrange
		const initialState: InitialStateType = {
			currentQuestionNumber: 1,
		} as InitialStateType;

		const action: ActionType = {
			type: 'INCREMENT_QUESTION_NUMBER',
		};

		const finalState: InitialStateType = {
			currentQuestionNumber: 2,
		} as InitialStateType;

		//Act
		const computedState = quizDataReducer(initialState, action);

		//Assert
		expect(computedState).toEqual(finalState);
	});

	test('should reset the quiz context to initial state on RESET dispatch', () => {
		//Arrange
		const initialState: InitialStateType = {
			attemptedQuiz: {
				_id: '124',
				name: 'Painting And Decorating Quiz',
				totalQuestions: 2,
				score: 0,
				questions: [
					{
						_id: '1',
						question: 'Who painted this series?',
						image: '',
						points: 10,
						options: [
							{ _id: '1', text: 'Andy Warhol', isRight: true },
							{ _id: '2', text: 'Andy Carpenter', isRight: false },
						],
					},

					{
						_id: '2',
						question: 'What is the name of this mysterious painting?',
						image: '',
						points: 10,
						options: [
							{ _id: '1', text: 'Mona Lisa', isRight: true },
							{ _id: '2', text: 'Lisa Lisa', isRight: false },
						],
					},
				],

				category: 'Painting',
				level: 'Level 2',
				highScore: [
					{ _id: '1', userId: '123', score: 25 },
					{ _id: '2', userId: '124', score: 23 },
				],
				image: '',
			},
			currentQuestionNumber: 2,
		} as InitialStateType;

		const action: ActionType = {
			type: 'RESET',
		};

		const finalState: InitialStateType = {
			attemptedQuiz: null,
			currentQuestionNumber: 1,
		} as InitialStateType;

		//Act
		const computedState = quizDataReducer(initialState, action);

		//Assert
		expect(computedState).toEqual(finalState);
	});

	test('should calculate the score for attempted quiz and all attempted questions on CALCULATE_SCORE dispatch', () => {
		//Arrange

		const initialState: InitialStateType = {
			attemptedQuiz: {
				_id: '124',
				name: 'Painting And Decorating Quiz',
				totalQuestions: 2,
				score: 0,
				questions: [
					{
						_id: '1',
						question: 'Who painted this series?',
						points: 10,
						options: [
							{
								_id: '1',
								text: 'Andy Warhol',
								isRight: true,
								isSelected: true,
							},
							{
								_id: '2',
								text: 'Andy Carpenter',
								isRight: false,
								isSelected: false,
							},
						],
					},

					{
						_id: '2',
						question: 'What is the name of this mysterious painting?',
						points: 10,
						negativePoints: 2,
						options: [
							{ _id: '1', text: 'Mona Lisa', isRight: true, isSelected: false },
							{ _id: '2', text: 'Lisa Lisa', isRight: false, isSelected: true },
						],
					},
				],
			},
			currentQuestionNumber: 2,
			scoreBoard: [] as ScoreData[],
		} as InitialStateType;

		const action: ActionType = {
			type: 'CALCULATE_SCORE',
		};

		const finalState: InitialStateType = {
			attemptedQuiz: {
				_id: '124',
				name: 'Painting And Decorating Quiz',
				totalQuestions: 2,
				score: 8,
				questions: [
					{
						_id: '1',
						question: 'Who painted this series?',
						points: 10,
						options: [
							{
								_id: '1',
								text: 'Andy Warhol',
								isRight: true,
								isSelected: true,
							},
							{
								_id: '2',
								text: 'Andy Carpenter',
								isRight: false,
								isSelected: false,
							},
						],
					},

					{
						_id: '2',
						question: 'What is the name of this mysterious painting?',
						points: 10,
						negativePoints: 2,
						options: [
							{ _id: '1', text: 'Mona Lisa', isRight: true, isSelected: false },
							{ _id: '2', text: 'Lisa Lisa', isRight: false, isSelected: true },
						],
					},
				],
			},
			currentQuestionNumber: 2,
			scoreBoard: [
				{
					quizName: 'Painting And Decorating Quiz',
					quizId: '124',
					score: 8,
					scoreStatus: 'FAIL',
				},
			] as ScoreData[],
		} as InitialStateType;

		//Act
		const computedState = quizDataReducer(initialState, action);

		//Assert
		expect(computedState).toEqual(finalState);
	});

	test('should calculate the score for attempted quiz and skipped questions on CALCULATE_SCORE dispatch', () => {
		//Arrange

		const initialState: InitialStateType = {
			attemptedQuiz: {
				_id: '124',
				name: 'Painting And Decorating Quiz',
				totalQuestions: 2,
				score: 0,
				questions: [
					{
						_id: '1',
						question: 'Who painted this series?',
						points: 10,
						options: [
							{
								_id: '1',
								text: 'Andy Warhol',
								isRight: true,
							},
							{
								_id: '2',
								text: 'Andy Carpenter',
								isRight: false,
							},
						],
					},

					{
						_id: '2',
						question: 'What is the name of this mysterious painting?',
						points: 10,
						negativePoints: 2,
						options: [
							{ _id: '1', text: 'Mona Lisa', isRight: true },
							{ _id: '2', text: 'Lisa Lisa', isRight: false },
						],
					},
				],
			},
			currentQuestionNumber: 2,
			scoreBoard: [] as ScoreData[],
		} as InitialStateType;

		const action: ActionType = {
			type: 'CALCULATE_SCORE',
		};

		const finalState: InitialStateType = {
			attemptedQuiz: {
				_id: '124',
				name: 'Painting And Decorating Quiz',
				totalQuestions: 2,
				score: -2,
				questions: [
					{
						_id: '1',
						question: 'Who painted this series?',
						points: 10,
						options: [
							{
								_id: '1',
								text: 'Andy Warhol',
								isRight: true,
							},
							{
								_id: '2',
								text: 'Andy Carpenter',
								isRight: false,
							},
						],
					},

					{
						_id: '2',
						question: 'What is the name of this mysterious painting?',
						points: 10,
						negativePoints: 2,
						options: [
							{ _id: '1', text: 'Mona Lisa', isRight: true },
							{ _id: '2', text: 'Lisa Lisa', isRight: false },
						],
					},
				],
			},
			currentQuestionNumber: 2,
			scoreBoard: [
				{
					quizName: 'Painting And Decorating Quiz',
					quizId: '124',
					score: -2,
					scoreStatus: 'FAIL',
				},
			] as ScoreData[],
		} as InitialStateType;

		//Act
		const computedState = quizDataReducer(initialState, action);

		//Assert
		expect(computedState).toEqual(finalState);
	});

	test('should throw error on CALCULATE_SCORE dispatch when There is no Attempted Quiz', () => {
		//Arrange

		const initialState: InitialStateType = {
			attemptedQuiz: null,
			currentQuestionNumber: 1,
			scoreBoard: [] as ScoreData[],
		} as InitialStateType;

		const action: ActionType = {
			type: 'CALCULATE_SCORE',
		};

		//Act
		const testCallback = () => {
			quizDataReducer(initialState, action);
		};

		//Assert
		expect(testCallback).toThrow(new Error('No quiz attempted'));
	});

	test('should add isSelected true to option selected by user on SELECT_OPTION dispatch when user attempts question', () => {
		//Arrange
		const initialState: InitialStateType = {
			attemptedQuiz: {
				_id: '124',
				name: 'Painting And Decorating Quiz',
				totalQuestions: 2,
				score: 0,
				questions: [
					{
						_id: '1',
						question: 'Who painted this series?',
						points: 10,
						options: [
							{
								_id: '1',
								text: 'Andy Warhol',
								isRight: true,
							},
							{
								_id: '2',
								text: 'Andy Carpenter',
								isRight: false,
							},
						],
					},

					{
						_id: '2',
						question: 'What is the name of this mysterious painting?',
						points: 10,
						negativePoints: 2,
						options: [
							{ _id: '1', text: 'Mona Lisa', isRight: true },
							{ _id: '2', text: 'Lisa Lisa', isRight: false },
						],
					},
				],
			},
			currentQuestionNumber: 2,
		} as InitialStateType;

		const action: ActionType = {
			type: 'SELECT_OPTION',
			payload: {
				questionId: '1',
				optionId: '1',
			},
		};

		const finalState: InitialStateType = {
			attemptedQuiz: {
				_id: '124',
				name: 'Painting And Decorating Quiz',
				totalQuestions: 2,
				score: 0,
				questions: [
					{
						_id: '1',
						question: 'Who painted this series?',
						points: 10,
						options: [
							{
								_id: '1',
								text: 'Andy Warhol',
								isRight: true,
								isSelected: true,
							},
							{
								_id: '2',
								text: 'Andy Carpenter',
								isRight: false,
								isSelected: false,
							},
						],
					},

					{
						_id: '2',
						question: 'What is the name of this mysterious painting?',
						points: 10,
						negativePoints: 2,
						options: [
							{ _id: '1', text: 'Mona Lisa', isRight: true },
							{ _id: '2', text: 'Lisa Lisa', isRight: false },
						],
					},
				],
			},
			currentQuestionNumber: 2,
		} as InitialStateType;

		//Act
		const computedState = quizDataReducer(initialState, action);

		//Assert
		expect(computedState).toEqual(finalState);
	});

	test('should throw error on SELECT_OPTION dispatch when There is no Attempted Quiz', () => {
		//Arrange

		const initialState: InitialStateType = {
			attemptedQuiz: null,
			currentQuestionNumber: 1,
		} as InitialStateType;

		const action: ActionType = {
			type: 'SELECT_OPTION',
			payload: {
				questionId: '1',
				optionId: '1',
			},
		};

		//Act
		const testCallback = () => {
			quizDataReducer(initialState, action);
		};

		//Assert
		expect(testCallback).toThrow(new Error('No quiz attempted'));
	});

	test('should throw error on dispatch with invalid action type', () => {
		//Arrange

		const initialState: InitialStateType = {
			attemptedQuiz: null,
			currentQuestionNumber: 1,
		} as InitialStateType;

		const action = {
			type: 'INVALID_ACTION_TYPE',
		};

		//Act
		const testCallback = () => {
			quizDataReducer(initialState, action as ActionType);
		};

		//Assert
		expect(testCallback).toThrow(new Error('Unhandled type of action'));
	});
});
