import axios from 'axios';
import { NavigateFunction } from 'react-router';

export const setupAuthenticationErrorHandler = (
	logOutUser: () => void,
	navigate: NavigateFunction,
) => {
	const UNAUTHORIZED = 401;
	axios.interceptors.response.use(
		(response) => response,
		(error) => {
			if (error?.response?.status === UNAUTHORIZED) {
				logOutUser();
				navigate('/login');
			}
			return Promise.reject(error);
		},
	);
};
