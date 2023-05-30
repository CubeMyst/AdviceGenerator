/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('App', () => {
	/* This is a test case for the `App` component. It checks if the component renders the `Card` component
by searching for the text "Advice #" using the `getByText` method from the `@testing-library/react`
library. If the text is found, the test passes. If not, the test fails. */
	test('renders the Card component', () => {
		const { getByText } = render(<App />);
		const cardElement = getByText(/Advice #/);
		expect(cardElement).toBeDefined();
	});
});
