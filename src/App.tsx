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
	UserRoute,
	PrivateRoute,
	Profile,
} from './Components';
import './App.css';
import { Route, Routes } from 'react-router';
import { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import { useQuizData } from './Context';
import axios from 'axios';
import { API_URL } from './utils';
import {
	CategoryOfQuiz,
	QuizCardFromDb,
} from './Context/QuizContext/Quiz.type';

export default function App() {
	const { quizDispatch } = useQuizData();

	useEffect(() => {
		(async () => {
			try {
				const {
					data: { response },
				} = await axios.get<{ response: QuizCardFromDb[] }>(
					`${API_URL}/quizzes`,
				);
				quizDispatch({
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
					`${API_URL}/categories`,
				);
				quizDispatch({
					type: 'SET_CATEGORIES',
					payload: { categories: response },
				});
			} catch (error) {
				console.log(error);
			}
		})();
	}, [quizDispatch]);
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

					<UserRoute path='/signup' element={<SignUp />} />
					<UserRoute path='/login' element={<Login />} />
					<UserRoute path='/forgot' element={<ForgotPassword />} />
					<PrivateRoute path='/profile' element={<Profile />} />
				</Routes>
			</div>
			<Footer />
		</div>
	);
}
