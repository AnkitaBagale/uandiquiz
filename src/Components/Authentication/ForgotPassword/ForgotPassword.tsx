import {
	FormControl,
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
	eyeIconButtonStyleProps,
	eyeIconStyleProps,
	headingStyleProps,
	apiErrorStyleProps,
	apiErrorSymbolStyleProps,
	overlayBoxStyleProps,
} from '../utils';
import { ViewIcon, ViewOffIcon, WarningTwoIcon } from '@chakra-ui/icons';
import {
	initialFormState,
	signUpFormReducer,
} from './reducers/sign-up-form.reducer';
import { btnStyleProps, blockButtonStyleProps } from '../../utils';

import { resetBtnClicked } from './utils/reset-btn-clicked';
import { ThankYouScreen } from '../ThankYouScreen';
import { ActionForm } from './reducers/reducers.type';
import Loader from 'react-loader-spinner';
import { useAuthentication } from '../../../Context';

export const ForgotPassword = () => {
	const [formState, formDispatch] = useReducer(
		signUpFormReducer,
		initialFormState,
	);
	const onFocusClearError = (action: ActionForm) => {
		formDispatch({ type: action.type, payload: '' });
	};
	const { resetPassword } = useAuthentication();
	return (
		<>
			<Box {...formWrapperStyleProps}>
				{formState.status === 'SUCCESS' ? (
					<ThankYouScreen message='Your password is set successfully!' />
				) : (
					<>
						<Heading {...headingStyleProps}>Reset Password</Heading>
						<Text pb='2rem' textAlign='center'>
							Enter your email and enter new password
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
									<Box w='100%'>
										<Input
											type={formState.showPassword ? 'type' : 'password'}
											{...InputStyleProps}
											placeholder='Enter new password here'
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
									<Box w='100%'>
										<Input
											type={formState.showConfirmPassword ? 'type' : 'password'}
											{...InputStyleProps}
											placeholder='Re-type your password here'
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
										disabled={formState.status === 'LOADING'}
										onClick={() => {
											resetBtnClicked({
												formState,
												formDispatch,
												resetPassword,
											});
										}}
										{...btnStyleProps}
										{...blockButtonStyleProps}>
										RESET
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
			</Box>
		</>
	);
};
