import quiz_default from './assets/quiz-default2.png';
import { Quiz } from './Quiz.type';

export const quiz3: Quiz = {
	_id: '122',
	name: 'Elementary Drawing Test!',
	totalQuestions: 10,
	score: 0,
	questions: [
		{
			_id: '1',
			question:
				'The lines that describe the outer edges of objects and figures are called _____',
			image: quiz_default,
			points: 10,
			options: [
				{ _id: '1', text: 'vertical lines', isRight: false },
				{ _id: '2', text: 'outlines', isRight: false },
				{ _id: '3', text: 'contour lines', isRight: true },
				{ _id: '4', text: 'horizon lines', isRight: false },
			],
		},

		{
			_id: '2',
			question:
				'A drawing technique for shading using parallel lines that cross over other parallel lines.',
			image: quiz_default,
			points: 10,
			options: [
				{ _id: '1', text: 'cross hatching', isRight: true },
				{ _id: '2', text: 'rubbing', isRight: false },
				{ _id: '3', text: 'hatching', isRight: false },
				{ _id: '4', text: 'blending', isRight: false },
			],
		},
		{
			_id: '3',
			question: 'If a sheet of paper is vertical, which position is it in?',
			image: quiz_default,
			points: 10,
			options: [
				{ _id: '1', text: 'landscape', isRight: false },
				{ _id: '2', text: 'portrait', isRight: true },
				{ _id: '3', text: 'left', isRight: false },
				{ _id: '4', text: 'bottom', isRight: false },
			],
		},
		{
			_id: '4',
			question: 'This is an example of a',
			image: quiz_default,
			points: 10,
			options: [
				{ _id: '1', text: 'value scale', isRight: true },
				{ _id: '2', text: 'black and white rainbow', isRight: false },
				{ _id: '3', text: 'gradient', isRight: false },
				{ _id: '4', text: 'none of the above', isRight: false },
			],
		},
		{
			_id: '5',
			question: 'This pencil technique is known as ______________.',
			image: quiz_default,
			points: 10,
			options: [
				{ _id: '1', text: 'inking', isRight: false },
				{ _id: '2', text: 'hatching', isRight: false },
				{ _id: '3', text: 'cross hatching', isRight: true },
				{ _id: '4', text: 'coloring', isRight: false },
			],
		},
		{
			_id: '6',
			question:
				'In pencil drawing, avoid shading too heavily/dark at the start.',
			image: quiz_default,
			points: 10,
			options: [
				{ _id: '1', text: 'true', isRight: true },
				{ _id: '2', text: 'false', isRight: false },
			],
		},
		{
			_id: '7',
			question: 'This is an example of:',
			image: quiz_default,
			points: 10,
			options: [
				{ _id: '1', text: 'Cross Hatching', isRight: false },
				{ _id: '2', text: 'Blended Shading', isRight: false },
				{ _id: '3', text: 'Stippling', isRight: true },
				{ _id: '4', text: 'Hatching', isRight: false },
			],
		},
		{
			_id: '8',
			question: 'This type of line is:',
			image: quiz_default,
			points: 10,
			options: [
				{ _id: '1', text: 'contour', isRight: true },
				{ _id: '2', text: 'cross contour', isRight: false },
				{ _id: '3', text: 'gesture', isRight: false },
				{ _id: '4', text: 'blind contour', isRight: false },
			],
		},
		{
			_id: '9',
			question: 'Art depicting inanimate objects are called',
			image: quiz_default,
			points: 10,
			options: [
				{ _id: '1', text: 'Gesture Drawings', isRight: false },
				{ _id: '2', text: 'Blind Contour Drawings', isRight: false },
				{ _id: '3', text: 'Grid Drawings', isRight: false },
				{ _id: '4', text: 'Still Life Drawings', isRight: true },
			],
		},
		{
			_id: '10',
			question:
				'Which pencil is the darkest with the softest lead and makes the darkest mark on the paper?',
			image: quiz_default,
			points: 10,
			options: [
				{ _id: '1', text: '6B', isRight: true },
				{ _id: '2', text: '4B', isRight: false },
				{ _id: '3', text: '2H', isRight: false },
				{ _id: '4', text: 'B', isRight: false },
			],
		},
	],
	type: 'Drawing',
	level: 'Level 1',
	highScore: [
		{ _id: '1', userId: '123', score: 25 },
		{ _id: '2', userId: '124', score: 23 },
	],
	image: quiz_default,
};
