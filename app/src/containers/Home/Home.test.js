import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router';
import '@testing-library/jest-dom';
import { Home } from './Home';

describe('Home', () => {
	it('renders the Home component', () => {
		render(
			<Router>
				<Home />
			</Router>
		);
	});
});
