import img1 from './assets/img1.png';
import img2 from './assets/img2.png';
import img3 from './assets/img3.png';

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

export const typesOfQuiz: TypesOfQuiz[] = [
	{ image: img1, type: 'Painting', noOfQuiz: 2, cardColor: '#B5DCCD' },
	{ image: img3, type: 'Drawing', noOfQuiz: 1, cardColor: '#FCBC7B' },
	{ image: img2, type: 'Pencil Sketching', noOfQuiz: 0, cardColor: '#FCBCBC' },
];

export const quizes: Quiz[] = [quiz2, quiz1, quiz3];
