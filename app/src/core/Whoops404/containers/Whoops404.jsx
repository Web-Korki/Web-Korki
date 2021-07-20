import React from 'react';
import { useHistory } from 'react-router-dom';
import { StyledGoBack } from '../styledComponents';

export function Whoops404() {
	const history = useHistory();

	const goBack = () => {
		history.goBack();
	};

	return (
		<div
			className='d-flex justify-content-center align-items-center flex-column'
			style={{ height: '100vh' }}>
			<h1>Sorry</h1>
			<p>The content you are looking for does not exist</p>
			<StyledGoBack onClick={() => goBack()}>Go back</StyledGoBack>
		</div>
	);
}
