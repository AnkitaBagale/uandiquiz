import quiz1_1 from './assets/Quiz1/quiz1-1.jpg';
import quiz1_2 from './assets/Quiz1/quiz1-2.jpg';
import quiz1_3 from './assets/Quiz1/quiz1-3.jpg';
import quiz1_4 from './assets/Quiz1/quiz1-4.jpg';
import quiz1_5 from './assets/Quiz1/quiz1-5.jpg';
import quiz1_6 from './assets/Quiz1/quiz1-6.jpg';
import quiz1_7 from './assets/Quiz1/quiz1-7.jpg';
import quiz1_8 from './assets/Quiz1/quiz1-8.jpg';
import quiz1_9 from './assets/Quiz1/quiz1-9.jpg';
import quiz1_10 from './assets/Quiz1/quiz1-10.jpg';

export const quiz1: Quiz = {
	_id: '124',
	name: 'Painting And Decorating Quiz',
	totalQuestions: 10,
	score: 0,
	questions: [
		{
			_id: '1',
			question: 'Who painted this series?',
			image: quiz1_1,
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
			image: quiz1_2,
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
			image: quiz1_3,
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
			image: quiz1_4,
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
			image: quiz1_5,
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
			image: quiz1_6,
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
			image: quiz1_7,
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
			image: quiz1_8,
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
			image: quiz1_9,
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
			image: quiz1_10,
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
