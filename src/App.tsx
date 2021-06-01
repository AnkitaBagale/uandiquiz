import {
	LandingPage,
	Nav,
	QuizContainer,
	Footer,
	CategoryLandingPage,
	Dashboard,
	SignUp,
	Login,
	ForgotPassword,
} from './Components';
import './App.css';
import { Route, Routes } from 'react-router';
import { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import { useStateContext } from './Context';
import axios from 'axios';
import { APIURL } from './utils';
import {
	CategoryOfQuiz,
	QuizCardFromDb,
} from './Context/QuizContext/Quiz.type';

export default function App() {
	const { dispatch } = useStateContext();

	useEffect(() => {
		(async () => {
			try {
				const {
					data: { response },
				} = await axios.get<{ response: QuizCardFromDb[] }>(
					`${APIURL}/quizzes`,
				);
				dispatch({
					type: 'SET_FEATURED_QUIZZES',
					payload: { featuredQuizzes: response },
				});
			} catch (error) {
				console.log(error);
			}
		})();

		(async () => {
			try {
				const {
					data: { response },
				} = await axios.get<{ response: CategoryOfQuiz[] }>(
					`${APIURL}/categories`,
				);
				dispatch({
					type: 'SET_CATEGORIES',
					payload: { categories: response },
				});
			} catch (error) {
				console.log(error);
			}
		})();
	}, [dispatch]);
	return (
		<div>
			<Nav />
			<ToastContainer />
			<div className='App'>
				<Routes>
					<Route path='/' element={<LandingPage />} />
					<Route path='/dashboard' element={<Dashboard />} />
					<Route
						path='/category/:categoryId'
						element={<CategoryLandingPage />}
					/>
					<Route path='/quiz/:quizId' element={<QuizContainer />} />
					<Route path='/signup' element={<SignUp />} />
					<Route path='/login' element={<Login />} />
					<Route path='/forgot' element={<ForgotPassword />} />
				</Routes>
			</div>
			<Footer />
		</div>
	);
}
