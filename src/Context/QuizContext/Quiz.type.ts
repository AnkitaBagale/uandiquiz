export type Option = {
	_id: string;
	text: string;
	isRight: boolean;
	isSelected?: boolean;
};

export type Question = {
	_id: string;
	question: string;
	image: string;
	points: number;
	negativePoints?: number;
	options: Option[];
};

export type UserScore = {
	_id: string;
	userId: string;
	score: number;
};

export type Quiz = {
	_id: string;
	score?: number;
	name: string;
	image: string;
	totalQuestions: number;
	questions: Question[];
	category: string;
	level: string;
	highScore: UserScore[];
};

export type CategoryOfQuiz = {
	_id: string;
	image: string;
	name: string;
	quizzes: number;
	featuredColor: string;
};

export type QuizCardFromDb = {
	_id: string;
	name: string;
	image: string;
	category: string;
	level: string;
};

export type CategoryFromDb = {
	_id: string;
	name: string;
	quizzes: QuizCardFromDb[];
};
