import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';
import { QuizDataProvider } from './Context';
import { colors, fonts } from './database';
import ScrollToTop from './ScrollToTop';
import { AuthenticationProvider } from './Context/AuthenticationContext/AuthenticationProvider';

const theme = extendTheme({
	colors,
	fonts,
});

const rootElement = document.getElementById('root');
ReactDOM.render(
	<StrictMode>
		<ChakraProvider theme={theme}>
			<Router>
				<AuthenticationProvider>
					<QuizDataProvider>
						<ScrollToTop />
						<App />
					</QuizDataProvider>
				</AuthenticationProvider>
			</Router>
		</ChakraProvider>
	</StrictMode>,
	rootElement,
);
