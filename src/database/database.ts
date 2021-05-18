import img1 from './assets/img1.png';
import img2 from './assets/img2.png';
import img3 from './assets/img3.png';
import { Quiz, CategoryOfQuiz } from './Quiz.type';

import { quiz1 } from './quiz1';
import { quiz2 } from './quiz2';
import { quiz3 } from './quiz3';

export const colors = {
	pink: {
		900: '#e63961',
		800: '#ff3f6c',
		700: '#FF6589',
		400: 'rgb(234, 234, 236,0.6)',
		300: '#ffd9e2',
		100: '#fff7f9',
	},
	gray: {
		900: '#282c3f',
		800: '#3f4049',
		700: '#696b79',
		600: '#d8d8da',
		400: '#eaeaec',
		300: '#f5f5f6',
		100: 'white',
	},
	violet: {
		900: '#3F3947',
		300: '#a7a7a7',
	},
};

export const fonts = {
	heading: 'Roboto',
	body: 'Roboto',
};

export const categories: CategoryOfQuiz[] = [
	{
		_id: '1',
		image: img1,
		type: 'Painting',
		noOfQuiz: 2,
		cardColor: '#B5DCCD',
	},
	{
		_id: '2',
		image: img3,
		type: 'Drawing',
		noOfQuiz: 1,
		cardColor: '#FCBC7B',
	},
	{
		_id: '3',
		image: img2,
		type: 'Pencil Sketching',
		noOfQuiz: 0,
		cardColor: '#FCBCBC',
	},
	{
		_id: '4',
		image: img1,
		type: 'Charcoal Painting',
		noOfQuiz: 0,
		cardColor: '#A4C9D7',
	},
];

export const quizzes: Quiz[] = [quiz2, quiz1, quiz3];
