import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Home from './Home';
import { Logo } from '../../components/layout/Logo';
import { StyledBox } from '../../components/styledComponents/index';
// import { render } from '@testing-library/react';

describe('Home', () => {
	const shallowRenderer = new ShallowRenderer(); //renders only one level deep and doesn't care about the output of the children
	shallowRenderer.render(
		<Router>
			<Home>
				<Logo />
				<Link>
					<StyledBox />
				</Link>
			</Home>
		</Router>
	);
	const RenderedHome = shallowRenderer.getRenderOutput();

	it('renders the Home component without error', () => {
		<RenderedHome />;
	});

	// it('renders with classname homepage', () => {

	// });
});
