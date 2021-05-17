type Option = {
	_id: string;
	text: string;
	/**
	 * For right answer make this true
	 */
	isRight: boolean;
	isSelected?: boolean;
};

type Question = {
	_id: string;
	question: string;
	image: string;
	points: number;
	negativePoints?: number;
	options: Option[];
};

type UserScore = {
	_id: string;
	userId: string;
	score: number;
};

type Quiz = {
	_id: string;
	userid?: string;
	score: number;
	name: string;
	image: string;
	totalQuestions: number;
	questions: Question[];
	type: string;
	level: string;
	highScore: UserScore[];
};

type TypesOfQuiz = {
	image: string;
	type: string;
	noOfQuiz: number;
	cardColor: string;
};
