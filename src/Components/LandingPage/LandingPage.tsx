import { CategoryList } from './CategoryList';
import { FeaturedQuizzesList } from './FeaturedQuizzesList';
import { Header } from './Header';

export const LandingPage = () => {
	return (
		<>
			<Header />
			<CategoryList />
			<FeaturedQuizzesList />
		</>
	);
};
