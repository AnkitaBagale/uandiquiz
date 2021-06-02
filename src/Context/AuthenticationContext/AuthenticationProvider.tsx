import axios from 'axios';
import React, { createContext, useContext, useEffect, useReducer } from 'react';
import { useNavigate } from 'react-router';
import {
	AuthenticationContext,
	AuthenticationState,
	loginUserParameters,
	ResetPasswordParameters,
	SignupUserParameters,
	UserDetails,
} from './AuthenticationContext.type';
import { authenticationReducer } from './reducers/authentication.reducer';
import { API_URL } from '../../utils';
import { setupAuthenticationErrorHandler } from './utils';

const Authentication = createContext<AuthenticationContext>(
	{} as AuthenticationContext,
);

export const AuthenticationProvider: React.FC = ({ children }) => {
	const sessionStrigifiedDetails = localStorage.getItem('session');
	const { username: userNameDetail, token: tokenDetails } =
		sessionStrigifiedDetails
			? JSON.parse(sessionStrigifiedDetails)
			: {
					username: '',
					token: '',
			  };

	const initialState: AuthenticationState = {
		username: userNameDetail,
		token: tokenDetails,
		userDetails: null,
	};

	const [authenticationState, authenticationDispatch] = useReducer(
		authenticationReducer,
		initialState,
	);
	const navigate = useNavigate();

	const loginUser = async ({ email, password, from }: loginUserParameters) => {
		try {
			const {
				data: {
					response: { firstname, token },
				},
				status,
			} = await axios({
				method: 'POST',
				url: `${API_URL}/users/authenticate`,
				headers: { email: email, password: password },
			});

			if (status === 200) {
				localStorage?.setItem(
					'session',
					JSON.stringify({ username: firstname, token }),
				);

				authenticationDispatch({
					type: 'LOGIN_USER',
					payload: { username: firstname, token },
				});
				navigate(from);
				return 'SUCCESS';
			}
		} catch (error) {
			console.log(error);
			return error?.response?.data?.message || 'Please try again!';
		}
	};

	const fetchUserDetails = async () => {
		try {
			const {
				data: { response },
				status,
			} = await axios.get<{ response: UserDetails }>(`${API_URL}/users/self`, {
				headers: {
					Authorization: `Bearer ${authenticationState.token}`,
				},
			});

			if (status === 200) {
				authenticationDispatch({
					type: 'SET_USER_DETAILS',
					payload: response,
				});
				return 'SUCCESS';
			} else {
				throw new Error('Something went wrong!');
			}
		} catch (error) {
			console.log(error);
			return 'Something went wrong!';
		}
	};

	const signUpNewUser = async ({
		email,
		password,
		firstname,
		lastname,
	}: SignupUserParameters) => {
		try {
			const { status } = await axios({
				method: 'POST',
				url: `${API_URL}/users`,
				data: {
					firstname: firstname,
					lastname: lastname,
					email: email,
					password: password,
				},
			});
			if (status === 201) {
				return 'SUCCESS';
			} else {
				throw Error('Request failed');
			}
		} catch (error) {
			console.log(error);
			return error?.response?.data?.message || 'Please try again!';
		}
	};

	const resetPassword = async ({
		email,
		password,
	}: ResetPasswordParameters) => {
		try {
			const { status } = await axios({
				method: 'POST',
				url: `${API_URL}/users/reset-password`,
				data: {
					email,
					password,
				},
			});

			if (status === 200) {
				return 'SUCCESS';
			} else {
				throw Error('Request failed');
			}
		} catch (error) {
			console.log(error);
			return error?.response?.data?.message || 'Please try again!';
		}
	};

	const logOutUser = () => {
		console.log('Heyy');
		localStorage?.removeItem('session');
		authenticationDispatch({ type: 'LOGOUT_USER' });
	};

	useEffect(() => {
		setupAuthenticationErrorHandler(logOutUser, navigate);
	}, [navigate]);

	return (
		<Authentication.Provider
			value={{
				loginUser,
				logOutUser,
				signUpNewUser,
				resetPassword,
				authenticationState,
				fetchUserDetails,
			}}>
			{children}
		</Authentication.Provider>
	);
};

export const useAuthentication = () => useContext(Authentication);
