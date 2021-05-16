import { LandingPage, Nav, QuizContainer } from './Components';
import './App.css';
import { Route, Routes } from 'react-router';

export default function App() {
	return (
		<div className='App'>
			<Nav />
			<Routes>
				<Route path='/' element={<LandingPage />} />
				<Route path='/quiz/:quizId' element={<QuizContainer />} />
			</Routes>
		</div>
	);
}
