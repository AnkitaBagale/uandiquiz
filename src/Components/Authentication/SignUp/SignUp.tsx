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
} from '../utils';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import {
	initialFormState,
	signUpFormReducer,
} from './reducers/sign-up-form.reducer';
import { btnStyleProps, blockButtonStyleProps } from '../../utils';
import {
	initialErrorsState,
	signUpFormErrorsReducer,
} from './reducers/sign-up-form-errors.reducer';
import { signupBtnClicked } from './utils/signup-btn-clicked';
import { ActionErrors } from './reducers/reducers.type';

export const SignUp = () => {
	const [formState, formDispatch] = useReducer(
		signUpFormReducer,
		initialFormState,
	);
	const [errorsState, errorsDispatch] = useReducer(
		signUpFormErrorsReducer,
		initialErrorsState,
	);
	const onFocusClearError = (action: ActionErrors) => {
		errorsDispatch({ type: action.type, payload: '' });
	};

	return (
		<>
			<Box {...formWrapperStyleProps}>
				<Heading
					textAlign='center'
					fontWeight='500'
					pb='1rem'
					fontSize='xx-large'>
					SIGN UP
				</Heading>
				<Text pb='2rem' textAlign='center'>
					Fill below form to sign up and enjoy full benifits of U&I Quiz
				</Text>

				<FormControl
					id='firstName'
					isRequired
					{...inputWrapperStyleProps}
					isInvalid={!!errorsState.firstNameError}>
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
								onFocusClearError({ type: 'SET_FIRST_NAME_ERROR', payload: '' })
							}
						/>
						<FormErrorMessage>{errorsState.firstNameError}</FormErrorMessage>
					</Box>
				</FormControl>

				<FormControl
					id='lastName'
					isRequired
					{...inputWrapperStyleProps}
					isInvalid={!!errorsState.lastNameError}>
					<FormLabel {...labelStyleProps}>Last Name</FormLabel>
					<Box w='100%'>
						<Input
							type='text'
							{...InputStyleProps}
							placeholder='Enter your last name'
							value={formState.lastName}
							onChange={(e) =>
								formDispatch({ type: 'SET_LAST_NAME', payload: e.target.value })
							}
							onFocus={() =>
								onFocusClearError({ type: 'SET_LAST_NAME_ERROR', payload: '' })
							}
						/>
						<FormErrorMessage>{errorsState.lastNameError}</FormErrorMessage>
					</Box>
				</FormControl>

				<FormControl
					id='email'
					isRequired
					{...inputWrapperStyleProps}
					isInvalid={!!errorsState.emailError}>
					<FormLabel {...labelStyleProps}>Email address</FormLabel>
					<Box w='100%'>
						<Input
							type='email'
							{...InputStyleProps}
							placeholder='example@example.com'
							value={formState.email}
							onChange={(e) =>
								formDispatch({ type: 'SET_EMAIL', payload: e.target.value })
							}
							onFocus={() =>
								onFocusClearError({ type: 'SET_EMAIL_ERROR', payload: '' })
							}
						/>
						<FormErrorMessage>{errorsState.emailError}</FormErrorMessage>
					</Box>
				</FormControl>

				<FormControl
					id='password'
					isRequired
					{...inputWrapperStyleProps}
					isInvalid={!!errorsState.passwordError}>
					<FormLabel {...labelStyleProps}>Password</FormLabel>
					<Box w='100%'>
						<Input
							type={formState.showPassword ? 'type' : 'password'}
							{...InputStyleProps}
							placeholder='Enter password'
							value={formState.password}
							onChange={(e) =>
								formDispatch({ type: 'SET_PASSWORD', payload: e.target.value })
							}
							onFocus={() =>
								onFocusClearError({ type: 'SET_PASSWORD_ERROR', payload: '' })
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
						<FormErrorMessage>{errorsState.passwordError}</FormErrorMessage>
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
								onClick={() => formDispatch({ type: 'SHOW_CONFIRM_PASSWORD' })}
								{...eyeIconButtonStyleProps}>
								{formState.showConfirmPassword ? (
									<ViewIcon {...eyeIconStyleProps} />
								) : (
									<ViewOffIcon {...eyeIconStyleProps} />
								)}
							</Button>
						</InputRightElement>
						<FormErrorMessage>
							{errorsState.confirmPasswordError || 'Password does not match'}
						</FormErrorMessage>
					</Box>
				</FormControl>
				<Box mt='2rem'>
					<Button
						onClick={() => {
							signupBtnClicked(formState, errorsDispatch);
						}}
						{...btnStyleProps}
						{...blockButtonStyleProps}>
						Submit
					</Button>
				</Box>
			</Box>
		</>
	);
};
