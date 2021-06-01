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
} from '../utils';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import {
	initialFormState,
	signUpFormReducer,
} from './reducers/login-form.reducer';
import {
	btnStyleProps,
	blockButtonStyleProps,
	textLinkStyleProps,
} from '../../utils';
import {
	initialErrorsState,
	signUpFormErrorsReducer,
} from './reducers/login-form-errors.reducer';
import { loginBtnClicked } from './utils/login-btn-clicked';
import { ActionErrors } from './reducers/reducers.type';
import { Link } from 'react-router-dom';

export const Login = () => {
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
					LOGIN
				</Heading>

				<FormControl
					id='email'
					isRequired
					{...inputWrapperStyleProps}
					isInvalid={!!errorsState.emailError}>
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
						<FormErrorMessage>{errorsState.emailError}</FormErrorMessage>
					</Box>
				</FormControl>

				<FormControl
					id='password'
					isRequired
					{...inputWrapperStyleProps}
					isInvalid={!!errorsState.passwordError}>
					<Box w='100%'>
						<Input
							type={formState.showPassword ? 'type' : 'password'}
							{...InputStyleProps}
							placeholder='Enter your password here'
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

				<Box mt='2rem'>
					<Button
						onClick={() => {
							loginBtnClicked(formState, errorsDispatch);
						}}
						{...btnStyleProps}
						{...blockButtonStyleProps}>
						Login
					</Button>
				</Box>

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
