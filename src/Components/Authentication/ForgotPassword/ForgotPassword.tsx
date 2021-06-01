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
import { resetBtnClicked } from './utils/reset-btn-clicked';
import { ActionErrors } from './reducers/reducers.type';

export const ForgotPassword = () => {
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
					Reset Password
				</Heading>
				<Text pb='2rem' textAlign='center'>
					Enter your email and enter new password
				</Text>

				<FormControl
					id='email'
					isRequired
					{...inputWrapperStyleProps}
					isInvalid={!!errorsState.emailError}>
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
					<FormErrorMessage>{errorsState.emailError}</FormErrorMessage>
				</FormControl>

				<FormControl
					id='password'
					isRequired
					{...inputWrapperStyleProps}
					isInvalid={!!errorsState.passwordError}>
					<Input
						type={formState.showPassword ? 'type' : 'password'}
						{...InputStyleProps}
						placeholder='Enter new password here'
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
				</FormControl>

				<FormControl
					id='confirmPassword'
					isRequired
					{...inputWrapperStyleProps}
					isInvalid={formState.password !== formState.confirmPassword}>
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
				</FormControl>
				<Box mt='2rem'>
					<Button
						onClick={() => {
							resetBtnClicked(formState, errorsDispatch);
						}}
						{...btnStyleProps}
						{...blockButtonStyleProps}>
						RESET
					</Button>
				</Box>
			</Box>
		</>
	);
};
