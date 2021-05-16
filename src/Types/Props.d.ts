type AnswerContainerProps = {
	question: Question;
	questionNumber: number;
};

type OptionCardProps = { option: Option };

type OptionContainerProps = { question: Question };

type QuizCardProps = { quiz: Quiz };

interface NavItem {
	label: string;
	href?: string;
}

type QuestionContainerProps = {
	question: Question;
	setShowResult: (flag: boolean) => void;
};

type RecommendedSectionProps = { type: string };

type VideoCardProps = { video: Video };
