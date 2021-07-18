import {
	FormControl,
	FormLabel,
	FormErrorMessage,
	Box,
	Input,
	InputRightElement,
	Button,
	Heading,
	Text,
} from '@chakra-ui/react';
import { useReducer } from 'react';
import {
	formWrapperStyleProps,
	inputWrapperStyleProps,
	eyeIconButtonWrapperStyleProps,
	InputStyleProps,
	labelStyleProps,
	eyeIconButtonStyleProps,
	eyeIconStyleProps,
	headingStyleProps,
	overlayBoxStyleProps,
	apiErrorStyleProps,
	apiErrorSymbolStyleProps,
} from '../utils';
import { ViewIcon, ViewOffIcon, WarningTwoIcon } from '@chakra-ui/icons';
import {
	initialFormState,
	signUpFormReducer,
} from './reducers/sign-up-form.reducer';
import {
	btnStyleProps,
	blockButtonStyleProps,
	textLinkStyleProps,
} from '../../utils';

import { signupBtnClicked } from './utils/signup-btn-clicked';

import { ThankYouScreen } from '../ThankYouScreen';
import { ActionForm } from './reducers/reducers.type';
import Loader from 'react-loader-spinner';
import { useAuthentication } from '../../../Context';
import { Link } from 'react-router-dom';

export const SignUp = () => {
	const [formState, formDispatch] = useReducer(
		signUpFormReducer,
		initialFormState,
	);
	const { signUpNewUser } = useAuthentication();

	const onFocusClearError = (action: ActionForm) => {
		formDispatch({ type: action.type, payload: '' });
	};

	return (
		<>
			<Box {...formWrapperStyleProps}>
				{formState.status === 'SUCCESS' ? (
					<ThankYouScreen message='Thank you for signing up!' />
				) : (
					<>
						<Heading {...headingStyleProps}>SIGN UP</Heading>
						<Text pb='2rem' textAlign='center'>
							Fill below form to sign up and enjoy full benifits of U&I Quiz
						</Text>

						<Box position='relative'>
							{formState.status === 'LOADING' && (
								<Box {...overlayBoxStyleProps}>
									<Loader
										type='TailSpin'
										color='#ff3f6c'
										height={80}
										width={80}
									/>
								</Box>
							)}
							<Box>
								<FormControl
									id='firstName'
									isRequired
									{...inputWrapperStyleProps}
									isInvalid={!!formState.firstNameError}>
									<FormLabel {...labelStyleProps}>First Name</FormLabel>
									<Box w='100%'>
										<Input
											type='text'
											{...InputStyleProps}
											placeholder='Enter your first name'
											value={formState.firstName}
											onChange={(e) =>
												formDispatch({
													type: 'SET_FIRST_NAME',
													payload: e.target.value,
												})
											}
											onFocus={() =>
												onFocusClearError({
													type: 'SET_FIRST_NAME_ERROR',
													payload: '',
												})
											}
										/>
										<FormErrorMessage>
											{formState.firstNameError}
										</FormErrorMessage>
									</Box>
								</FormControl>

								<FormControl
									id='lastName'
									isRequired
									{...inputWrapperStyleProps}
									isInvalid={!!formState.lastNameError}>
									<FormLabel {...labelStyleProps}>Last Name</FormLabel>
									<Box w='100%'>
										<Input
											type='text'
											{...InputStyleProps}
											placeholder='Enter your last name'
											value={formState.lastName}
											onChange={(e) =>
												formDispatch({
													type: 'SET_LAST_NAME',
													payload: e.target.value,
												})
											}
											onFocus={() =>
												onFocusClearError({
													type: 'SET_LAST_NAME_ERROR',
													payload: '',
												})
											}
										/>
										<FormErrorMessage>
											{formState.lastNameError}
										</FormErrorMessage>
									</Box>
								</FormControl>

								<FormControl
									id='email'
									isRequired
									{...inputWrapperStyleProps}
									isInvalid={!!formState.emailError}>
									<FormLabel {...labelStyleProps}>Email address</FormLabel>
									<Box w='100%'>
										<Input
											type='email'
											{...InputStyleProps}
											placeholder='example@example.com'
											value={formState.email}
											onChange={(e) =>
												formDispatch({
													type: 'SET_EMAIL',
													payload: e.target.value,
												})
											}
											onFocus={() =>
												onFocusClearError({
													type: 'SET_EMAIL_ERROR',
													payload: '',
												})
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
									<FormLabel {...labelStyleProps}>Password</FormLabel>
									<Box w='100%'>
										<Input
											type={formState.showPassword ? 'type' : 'password'}
											{...InputStyleProps}
											placeholder='Enter password'
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
										<FormErrorMessage>
											{formState.passwordError}
										</FormErrorMessage>
									</Box>
								</FormControl>

								<FormControl
									id='confirmPassword'
									isRequired
									{...inputWrapperStyleProps}
									isInvalid={formState.password !== formState.confirmPassword}>
									<FormLabel {...labelStyleProps}>Confirm Password</FormLabel>
									<Box w='100%'>
										<Input
											type={formState.showConfirmPassword ? 'type' : 'password'}
											{...InputStyleProps}
											placeholder='Re-type your password'
											value={formState.confirmPassword}
											onChange={(e) =>
												formDispatch({
													type: 'SET_CONFIRM_PASSWORD',
													payload: e.target.value,
												})
											}
										/>
										<InputRightElement {...eyeIconButtonWrapperStyleProps}>
											<Button
												onClick={() =>
													formDispatch({ type: 'SHOW_CONFIRM_PASSWORD' })
												}
												{...eyeIconButtonStyleProps}>
												{formState.showConfirmPassword ? (
													<ViewIcon {...eyeIconStyleProps} />
												) : (
													<ViewOffIcon {...eyeIconStyleProps} />
												)}
											</Button>
										</InputRightElement>
										<FormErrorMessage>
											{formState.confirmPasswordError ||
												'Password does not match'}
										</FormErrorMessage>
									</Box>
								</FormControl>

								<Box mt='2rem'>
									<Button
										onClick={() => {
											signupBtnClicked({
												formState,
												formDispatch,
												signUpNewUser,
											});
										}}
										{...btnStyleProps}
										{...blockButtonStyleProps}>
										Submit
									</Button>
								</Box>
							</Box>
						</Box>
						{formState.status === 'FAILURE' && (
							<Box {...apiErrorStyleProps}>
								<WarningTwoIcon {...apiErrorSymbolStyleProps} />
								{formState.apiError}
							</Box>
						)}
					</>
				)}
				<Box mt='1rem' fontSize='0.9rem'>
					Already registered ?
					<Link to='/login'>
						<Box as='span' {...textLinkStyleProps}>
							Login here
						</Box>
					</Link>
				</Box>
			</Box>
		</>
	);
};
