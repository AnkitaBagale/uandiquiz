import quiz_default from './assets/quiz-default2.png';
import quiz2_1 from './assets/Quiz2/quiz2-1.jpg';
import quiz2_2 from './assets/Quiz2/quiz2-2.jpg';
import quiz2_3 from './assets/Quiz2/quiz2-3.jpg';
import quiz2_4 from './assets/Quiz2/quiz2-4.jpg';
import quiz2_5 from './assets/Quiz2/quiz2-5.jpg';
import { Quiz } from './Quiz.type';

export const quiz2: Quiz = {
	_id: '123',
	name: 'Elementary Art Test!',
	totalQuestions: 10,
	score: 0,
	questions: [
		{
			_id: '1',
			question: 'Mixing which two colors produces purple?',
			image: quiz2_1,
			points: 10,
			options: [
				{ _id: '1', text: 'Green and brown', isRight: false },
				{ _id: '2', text: 'Blue and red', isRight: true },
				{ _id: '3', text: 'Black and blue', isRight: false },
			],
		},

		{
			_id: '2',
			question: 'Mixing blue and yellow produces which color?',
			image: quiz2_2,
			points: 10,
			options: [
				{ _id: '1', text: 'Green', isRight: true },
				{ _id: '2', text: 'Magenta', isRight: false },
				{ _id: '3', text: 'Violet', isRight: false },
			],
		},
		{
			_id: '3',
			question: 'Which two colors mixed together make orange?',
			image: quiz2_3,
			points: 10,
			options: [
				{ _id: '1', text: 'Red and Brown', isRight: false },
				{ _id: '2', text: 'Yellow and Red', isRight: true },
				{ _id: '3', text: 'Brown and Yellow', isRight: false },
			],
		},
		{
			_id: '4',
			question: 'Cool colors are red, yellow and orange.',
			image: quiz2_4,
			points: 10,
			options: [
				{ _id: '1', text: 'True', isRight: false },
				{ _id: '2', text: 'False', isRight: true },
			],
		},
		{
			_id: '5',
			question: 'The horizon line goes from the top to the bottom of the page.',
			image: quiz2_5,
			points: 10,
			options: [
				{ _id: '1', text: 'True', isRight: false },
				{ _id: '2', text: 'False', isRight: true },
			],
		},
		{
			_id: '6',
			question: 'Hue is another name for color.',
			image: quiz_default,
			points: 10,
			options: [
				{ _id: '1', text: 'True', isRight: true },
				{ _id: '2', text: 'False', isRight: false },
			],
		},
		{
			_id: '7',
			question:
				'A pattern is something repeated over and over usually in a planned way.',
			image: quiz_default,
			points: 10,
			options: [
				{ _id: '1', text: 'True', isRight: true },
				{ _id: '2', text: 'False', isRight: false },
			],
		},
		{
			_id: '8',
			question: 'A shade is any light color usually made by adding white.',
			image: quiz_default,
			points: 10,
			options: [
				{ _id: '1', text: 'True', isRight: false },
				{ _id: '2', text: 'False', isRight: true },
			],
		},
		{
			_id: '9',
			question: 'Abstract art is?',
			image: quiz_default,
			points: 10,
			options: [
				{ _id: '1', text: 'A person who studies art history', isRight: false },
				{ _id: '2', text: 'A three-dimensional artwork', isRight: false },
				{
					_id: '3',
					text: 'A style of art that is not realistic',
					isRight: true,
				},
			],
		},
		{
			_id: '10',
			question: 'An architect is',
			image: quiz_default,
			points: 10,
			options: [
				{ _id: '1', text: 'A person who studies art history', isRight: false },
				{
					_id: '2',
					text: 'A person who designs the construction of buildings',
					isRight: true,
				},
				{
					_id: '3',
					text: 'A person who expresses an opinion on matters of art',
					isRight: false,
				},
			],
		},
	],
	type: 'Painting',
	level: 'Level 1',
	highScore: [
		{ _id: '1', userId: '123', score: 25 },
		{ _id: '2', userId: '124', score: 23 },
	],
	image: quiz_default,
};
