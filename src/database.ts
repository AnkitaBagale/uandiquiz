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

export const quiz1: Quiz = {
	_id: '123',
	name: 'Basic Painting And Decorating Quiz',
	totalQuestions: 10,
	score: 0,
	questions: [
		{
			_id: '1',
			question: 'Who painted this series?',
			image:
				'https://i.postimg.cc/BZy0XzL6/bench-accounting-un-G80-SBSf-MU-unsplash.jpg',
			points: 10,
			options: [
				{ _id: '1', text: 'Andy Warhol', isRight: true },
				{ _id: '2', text: 'Andy Carpenter', isRight: false },
				{ _id: '3', text: 'Andy Milton', isRight: false },
				{ _id: '4', text: 'Andy Dwyer', isRight: false },
			],
		},

		{
			_id: '2',
			question: 'What is the name of this mysterious painting?',
			image:
				'https://i.postimg.cc/BZy0XzL6/bench-accounting-un-G80-SBSf-MU-unsplash.jpg',
			points: 10,
			options: [
				{ _id: '1', text: 'Mona Lisa', isRight: true },
				{ _id: '2', text: 'Lisa Lisa', isRight: false },
				{ _id: '3', text: 'Maury Lisa', isRight: false },
				{ _id: '4', text: 'Moana Lisa', isRight: false },
			],
		},

		{
			_id: '3',
			question: 'What is the name of this American icon?',
			image:
				'https://i.postimg.cc/BZy0XzL6/bench-accounting-un-G80-SBSf-MU-unsplash.jpg',
			points: 10,
			options: [
				{ _id: '1', text: 'Woman in Chair', isRight: false },
				{ _id: '2', text: 'Your Mama', isRight: false },
				{ _id: '3', text: 'Mona Lisa USA', isRight: false },
				{ _id: '4', text: "Whistler's mother", isRight: true },
			],
		},

		{
			_id: '4',
			question:
				'Which modern American Icon turned his sketches into an animated and theme park empire?',
			image:
				'https://i.postimg.cc/BZy0XzL6/bench-accounting-un-G80-SBSf-MU-unsplash.jpg',
			points: 10,
			options: [
				{ _id: '1', text: 'Margot Disney', isRight: false },
				{ _id: '2', text: 'Walt Disney', isRight: true },
				{ _id: '3', text: 'Roy Disney', isRight: false },
				{ _id: '4', text: 'Maddox Disney', isRight: false },
			],
		},

		{
			_id: '5',
			question: 'What famous artist could draw before he could walk or talk?',
			image:
				'https://i.postimg.cc/BZy0XzL6/bench-accounting-un-G80-SBSf-MU-unsplash.jpg',
			points: 10,
			options: [
				{ _id: '1', text: 'Roy Disney', isRight: false },
				{ _id: '2', text: 'Walt Disney', isRight: false },
				{ _id: '3', text: 'Kaylee Jade', isRight: false },
				{ _id: '4', text: 'Pablo Picasso', isRight: true },
			],
		},
		{
			_id: '6',
			question: 'Who made a series of paintings of water lilies?',
			image:
				'https://i.postimg.cc/BZy0XzL6/bench-accounting-un-G80-SBSf-MU-unsplash.jpg',
			points: 10,
			options: [
				{ _id: '1', text: 'Bruce Wayne', isRight: false },
				{ _id: '2', text: 'Claude Monet', isRight: true },
				{ _id: '3', text: 'Diana Prince', isRight: false },
				{ _id: '4', text: 'Clerk Kent', isRight: false },
			],
		},
		{
			_id: '7',
			question:
				'Where was Vincent Van Gogh when he painted, "The Starry Night"?',
			image:
				'https://i.postimg.cc/BZy0XzL6/bench-accounting-un-G80-SBSf-MU-unsplash.jpg',
			points: 10,
			options: [
				{ _id: '1', text: 'In space', isRight: false },
				{ _id: '2', text: 'In psychiatric hospital', isRight: true },
				{ _id: '3', text: 'A beach', isRight: false },
				{ _id: '4', text: 'A hotel', isRight: false },
			],
		},
		{
			_id: '8',
			question: 'Which famous painting was inspired by a volcanic eruption?',
			image:
				'https://i.postimg.cc/BZy0XzL6/bench-accounting-un-G80-SBSf-MU-unsplash.jpg',
			points: 10,
			options: [
				{ _id: '1', text: 'Holler', isRight: false },
				{ _id: '2', text: 'Volcano', isRight: false },
				{ _id: '3', text: 'Scream', isRight: true },
				{ _id: '4', text: 'Lava', isRight: false },
			],
		},
		{
			_id: '9',
			question:
				'What eccentric Spanish artist depicted melting clocks in a painting entitled, "The Persistence of Memory"?',
			image:
				'https://i.postimg.cc/BZy0XzL6/bench-accounting-un-G80-SBSf-MU-unsplash.jpg',
			points: 10,
			options: [
				{ _id: '1', text: 'Pablo Picasso', isRight: false },
				{ _id: '2', text: 'Salvador Dali', isRight: true },
				{ _id: '3', text: 'Vincent Van Gogh', isRight: false },
				{ _id: '4', text: 'Leonardo DaVinci', isRight: false },
			],
		},
		{
			_id: '10',
			question: 'Who painted the work entitled "Nighthawks"?',
			image:
				'https://i.postimg.cc/BZy0XzL6/bench-accounting-un-G80-SBSf-MU-unsplash.jpg',
			points: 10,
			options: [
				{ _id: '1', text: 'Edward Hopper', isRight: true },
				{ _id: '2', text: 'Dr. Seuss', isRight: false },
				{ _id: '3', text: 'Walt Disney', isRight: false },
				{ _id: '4', text: 'Vincent Van Gogh', isRight: false },
			],
		},
	],
	type: 'Painting',
	level: 'Level 2',
	highScore: [
		{ _id: '1', userId: '123', score: 25 },
		{ _id: '2', userId: '124', score: 23 },
	],
	image:
		'https://i.postimg.cc/BZy0XzL6/bench-accounting-un-G80-SBSf-MU-unsplash.jpg',
};

export const quiz2: Quiz = {
	_id: '122',
	name: 'Elementary Art Test!',
	totalQuestions: 10,
	score: 0,
	questions: [
		{
			_id: '1',
			question: 'Mixing which two colors produces purple?',
			image:
				'https://i.postimg.cc/BZy0XzL6/bench-accounting-un-G80-SBSf-MU-unsplash.jpg',
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
			image:
				'https://i.postimg.cc/BZy0XzL6/bench-accounting-un-G80-SBSf-MU-unsplash.jpg',
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
			image:
				'https://i.postimg.cc/BZy0XzL6/bench-accounting-un-G80-SBSf-MU-unsplash.jpg',
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
			image:
				'https://i.postimg.cc/BZy0XzL6/bench-accounting-un-G80-SBSf-MU-unsplash.jpg',
			points: 10,
			options: [
				{ _id: '1', text: 'True', isRight: true },
				{ _id: '2', text: 'False', isRight: false },
			],
		},
		{
			_id: '5',
			question: 'The horizon line goes from the top to the bottom of the page.',
			image:
				'https://i.postimg.cc/BZy0XzL6/bench-accounting-un-G80-SBSf-MU-unsplash.jpg',
			points: 10,
			options: [
				{ _id: '1', text: 'True', isRight: false },
				{ _id: '2', text: 'False', isRight: true },
			],
		},
		{
			_id: '6',
			question: 'Hue is another name for color.',
			image:
				'https://i.postimg.cc/BZy0XzL6/bench-accounting-un-G80-SBSf-MU-unsplash.jpg',
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
			image:
				'https://i.postimg.cc/BZy0XzL6/bench-accounting-un-G80-SBSf-MU-unsplash.jpg',
			points: 10,
			options: [
				{ _id: '1', text: 'True', isRight: true },
				{ _id: '2', text: 'False', isRight: false },
			],
		},
		{
			_id: '8',
			question: 'A shade is any light color usually made by adding white.',
			image:
				'https://i.postimg.cc/BZy0XzL6/bench-accounting-un-G80-SBSf-MU-unsplash.jpg',
			points: 10,
			options: [
				{ _id: '1', text: 'True', isRight: false },
				{ _id: '2', text: 'False', isRight: true },
			],
		},
		{
			_id: '9',
			question: 'Abstract art is?',
			image:
				'https://i.postimg.cc/BZy0XzL6/bench-accounting-un-G80-SBSf-MU-unsplash.jpg',
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
			image:
				'https://i.postimg.cc/BZy0XzL6/bench-accounting-un-G80-SBSf-MU-unsplash.jpg',
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
	image:
		'https://i.postimg.cc/BZy0XzL6/bench-accounting-un-G80-SBSf-MU-unsplash.jpg',
};

export const quiz4: Quiz = {
	_id: '122',
	name: 'Elementary Art Test!',
	totalQuestions: 10,
	score: 0,
	questions: [
		{
			_id: '1',
			question:
				'The lines that describe the outer edges of objects and figures are called _____',
			image:
				'https://i.postimg.cc/BZy0XzL6/bench-accounting-un-G80-SBSf-MU-unsplash.jpg',
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
			image:
				'https://i.postimg.cc/BZy0XzL6/bench-accounting-un-G80-SBSf-MU-unsplash.jpg',
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
			image:
				'https://i.postimg.cc/BZy0XzL6/bench-accounting-un-G80-SBSf-MU-unsplash.jpg',
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
			image:
				'https://i.postimg.cc/BZy0XzL6/bench-accounting-un-G80-SBSf-MU-unsplash.jpg',
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
			image:
				'https://i.postimg.cc/BZy0XzL6/bench-accounting-un-G80-SBSf-MU-unsplash.jpg',
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
			image:
				'https://i.postimg.cc/BZy0XzL6/bench-accounting-un-G80-SBSf-MU-unsplash.jpg',
			points: 10,
			options: [
				{ _id: '1', text: 'true', isRight: true },
				{ _id: '2', text: 'false', isRight: false },
			],
		},
		{
			_id: '7',
			question: 'This is an example of:',
			image:
				'https://i.postimg.cc/BZy0XzL6/bench-accounting-un-G80-SBSf-MU-unsplash.jpg',
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
			image:
				'https://i.postimg.cc/BZy0XzL6/bench-accounting-un-G80-SBSf-MU-unsplash.jpg',
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
			image:
				'https://i.postimg.cc/BZy0XzL6/bench-accounting-un-G80-SBSf-MU-unsplash.jpg',
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
			image:
				'https://i.postimg.cc/BZy0XzL6/bench-accounting-un-G80-SBSf-MU-unsplash.jpg',
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
	image:
		'https://i.postimg.cc/BZy0XzL6/bench-accounting-un-G80-SBSf-MU-unsplash.jpg',
};

export const quizes: Quiz[] = [quiz1, quiz2, quiz4];
