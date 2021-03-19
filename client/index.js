import React from 'react';
import { render } from 'react-dom';

import { createMuiTheme, ThemeProvider } from '@material-ui/core';

import { NavBar, HomePage } from './components';

const theme = createMuiTheme({
	typography: {
		allVariants: {
			color: 'white',
		},
	},
	palette: {
		divider: '#5c5c5c',
		paper: '#424242',
		blue: '#0086d4',
		secondary: {
			main: '#fff',
		},
	},
});

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<NavBar />
			<HomePage />
		</ThemeProvider>
	);
};

render(<App />, document.getElementById('app'));
