import { ActionType, InitialStateType } from '../QuizContext.type';
import { quizDataReducer } from './quizdata.reducer';

describe('Testing quiz dispatch', () => {
	test('Should set the attempted quiz in the context on SET_ATTEMPT dispatch', () => {
		//Arrange
		const initialState: InitialStateType = {
			attemptedQuiz: null,
			currentQuestionNumber: 1,
		};

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

					type: 'Painting',
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

				type: 'Painting',
				level: 'Level 2',
				highScore: [
					{ _id: '1', userId: '123', score: 25 },
					{ _id: '2', userId: '124', score: 23 },
				],
				image: '',
			},
			currentQuestionNumber: 1,
		};

		//Act
		const computedState = quizDataReducer(initialState, action);

		//Assert
		expect(computedState).toEqual(finalState);
	});
});

describe('Testing quiz dispatch', () => {
	test('Should increment current question number on INCREMENT_QUESTION_NUMBER dispatch', () => {
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

				type: 'Painting',
				level: 'Level 2',
				highScore: [
					{ _id: '1', userId: '123', score: 25 },
					{ _id: '2', userId: '124', score: 23 },
				],
				image: '',
			},
			currentQuestionNumber: 1,
		};

		const action: ActionType = {
			type: 'INCREMENT_QUESTION_NUMBER',
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

				type: 'Painting',
				level: 'Level 2',
				highScore: [
					{ _id: '1', userId: '123', score: 25 },
					{ _id: '2', userId: '124', score: 23 },
				],
				image: '',
			},
			currentQuestionNumber: 2,
		};

		//Act
		const computedState = quizDataReducer(initialState, action);

		//Assert
		expect(computedState).toEqual(finalState);
	});
});

describe('Testing quiz dispatch', () => {
	test('Should reset the quiz context to initial state on RESET dispatch', () => {
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

				type: 'Painting',
				level: 'Level 2',
				highScore: [
					{ _id: '1', userId: '123', score: 25 },
					{ _id: '2', userId: '124', score: 23 },
				],
				image: '',
			},
			currentQuestionNumber: 10,
		};

		const action: ActionType = {
			type: 'RESET',
		};

		const finalState: InitialStateType = {
			attemptedQuiz: null,
			currentQuestionNumber: 1,
		};

		//Act
		const computedState = quizDataReducer(initialState, action);

		//Assert
		expect(computedState).toEqual(finalState);
	});
});
