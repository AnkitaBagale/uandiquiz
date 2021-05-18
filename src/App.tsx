import {
	LandingPage,
	Nav,
	QuizContainer,
	Footer,
	CategoryLandingPage,
} from './Components';
import './App.css';
import { Route, Routes } from 'react-router';

export default function App() {
	return (
		<div>
			<Nav />
			<div className='App'>
				<Routes>
					<Route path='/' element={<LandingPage />} />
					<Route
						path='/category/:categoryName'
						element={<CategoryLandingPage />}
					/>
					<Route path='/quiz/:quizId' element={<QuizContainer />} />
				</Routes>
			</div>
			<Footer />
		</div>
	);
}
