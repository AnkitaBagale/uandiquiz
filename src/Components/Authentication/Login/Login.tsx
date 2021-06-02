import {
	FormControl,
	FormErrorMessage,
	Box,
	Input,
	InputRightElement,
	Button,
	Heading,
} from '@chakra-ui/react';
import { useReducer } from 'react';
import {
	formWrapperStyleProps,
	inputWrapperStyleProps,
	eyeIconButtonWrapperStyleProps,
	InputStyleProps,
	eyeIconButtonStyleProps,
	eyeIconStyleProps,
	headingStyleProps,
	overlayBoxStyleProps,
	apiErrorSymbolStyleProps,
	apiErrorStyleProps,
} from '../utils';
import { ViewIcon, ViewOffIcon, WarningTwoIcon } from '@chakra-ui/icons';

import {
	btnStyleProps,
	blockButtonStyleProps,
	textLinkStyleProps,
} from '../../utils';
import { loginFormReducer, initialFormState } from './reducers';
import { loginBtnClicked } from './utils/login-btn-clicked';
import { Link, useLocation } from 'react-router-dom';
import { useAuthentication } from '../../../Context';
import { LocationState } from '../../../Context/AuthenticationContext/AuthenticationContext.type';
import { ActionForm } from './reducers/reducers.type';
import Loader from 'react-loader-spinner';

export const Login = () => {
	const [formState, formDispatch] = useReducer(
		loginFormReducer,
		initialFormState,
	);

	const onFocusClearError = (action: ActionForm) => {
		formDispatch({ type: action.type, payload: '' });
	};
	const { loginUser } = useAuthentication();
	const location = useLocation();
	const locationState = location.state as LocationState;
	const navigateToPath = locationState?.from || '/';

	return (
		<>
			<Box {...formWrapperStyleProps}>
				<Heading {...headingStyleProps}>LOGIN</Heading>
				<Box position='relative'>
					<Box>
						<FormControl
							id='email'
							isRequired
							{...inputWrapperStyleProps}
							isInvalid={!!formState.emailError}>
							<Box w='100%'>
								<Input
									type='email'
									{...InputStyleProps}
									placeholder='Enter your email here'
									value={formState.email}
									onChange={(e) =>
										formDispatch({ type: 'SET_EMAIL', payload: e.target.value })
									}
									onFocus={() =>
										onFocusClearError({ type: 'SET_EMAIL_ERROR', payload: '' })
									}
								/>
								<FormErrorMessage>{formState.emailError}</FormErrorMessage>
							</Box>
						</FormControl>

						<FormControl
							id='password'
							isRequired
							{...inputWrapperStyleProps}
							isInvalid={!!formState.passwordError}>
							<Box w='100%'>
								<Input
									type={formState.showPassword ? 'type' : 'password'}
									{...InputStyleProps}
									placeholder='Enter your password here'
									value={formState.password}
									onChange={(e) =>
										formDispatch({
											type: 'SET_PASSWORD',
											payload: e.target.value,
										})
									}
									onFocus={() =>
										onFocusClearError({
											type: 'SET_PASSWORD_ERROR',
											payload: '',
										})
									}
								/>
								<InputRightElement {...eyeIconButtonWrapperStyleProps}>
									<Button
										onClick={() => formDispatch({ type: 'SHOW_PASSWORD' })}
										{...eyeIconButtonStyleProps}>
										{formState.showPassword ? (
											<ViewIcon {...eyeIconStyleProps} />
										) : (
											<ViewOffIcon {...eyeIconStyleProps} />
										)}
									</Button>
								</InputRightElement>
								<FormErrorMessage>{formState.passwordError}</FormErrorMessage>
							</Box>
						</FormControl>

						<Box mt='2rem'>
							<Button
								onClick={() => {
									loginBtnClicked({
										formState,
										formDispatch,
										loginUser,
										from: navigateToPath,
									});
								}}
								{...btnStyleProps}
								{...blockButtonStyleProps}>
								Login
							</Button>
						</Box>
					</Box>
					{formState.status === 'LOADING' && (
						<Box {...overlayBoxStyleProps}>
							<Loader type='TailSpin' color='#ff3f6c' height={80} width={80} />
						</Box>
					)}
				</Box>
				{formState.status === 'FAILURE' && (
					<Box {...apiErrorStyleProps}>
						<WarningTwoIcon {...apiErrorSymbolStyleProps} />
						{formState.apiError}
					</Box>
				)}
				<Box mt='1rem' fontSize='0.9rem'>
					Forgot your password?
					<Link to='/forgot'>
						<Box as='span' {...textLinkStyleProps}>
							Reset here
						</Box>
					</Link>
				</Box>

				<Box mt='0.5rem' fontSize='0.9rem'>
					Not a user yet?
					<Link to='/signup'>
						<Box as='span' {...textLinkStyleProps}>
							Create your account
						</Box>
					</Link>
				</Box>
			</Box>
		</>
	);
};
