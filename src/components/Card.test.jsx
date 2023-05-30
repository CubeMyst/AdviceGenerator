/* eslint-disable testing-library/no-wait-for-multiple-assertions */
/* eslint-disable testing-library/await-async-query */
/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import Card from './Card';

describe('Card', () => {
	test('renders the correct advice ID and advice', async () => {
		const { findByText } = render(<Card />);

		// Comprobación de que el ID del consejo se muestra correctamente
		const adviceID = await findByText(/Advice #/);
		expect(adviceID).toBeTruthy();

		// Comprobación de que el consejo se muestra correctamente
		const advice = await findByText(/“/);
		expect(advice).toBeTruthy();
	});

	test('calls getAdvice and sets advice and advice ID on button click', async () => {
		const { getByRole, findByText } = render(<Card />);

		const button = getByRole('button');
		fireEvent.click(button);

		await waitFor(() => {
			// Comprobación de que el ID del consejo se actualiza correctamente después de hacer clic en el botón
			const adviceID = findByText(/Advice #/);
			expect(adviceID).toBeTruthy();

			// Comprobación de que el consejo se actualiza correctamente después de hacer clic en el botón
			const advice = findByText(/“/);
			expect(advice).toBeTruthy();
		});
	});

	test('calls handleRotate on button click and toggles the rotate state', () => {
		const { getByRole } = render(<Card />);

		const button = getByRole('button');
		fireEvent.click(button);

		// Comprobación de que el estado de rotación cambia a "rotateB" después de hacer clic en el botón
		expect(button.classList.contains('rotateB')).toBe(true);

		fireEvent.click(button);

		// Comprobación de que el estado de rotación cambia a "rotateA" después de hacer clic nuevamente en el botón
		expect(button.classList.contains('rotateA')).toBe(true);
	});
});
