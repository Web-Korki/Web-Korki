import React from 'react';
import { useHistory } from 'react-router-dom';
import { StyledGoBack } from '../styledComponents';
import { BookImage } from '../components/BookImage';

export function Whoops404() {
	const history = useHistory();

	const goBack = () => {
		history.goBack();
	};

	return (
		<div
			className='d-flex justify-content-center align-items-center flex-column scalable-wrapper'
			style={{ height: '100vh' }}>
			<h1>Sorry</h1>
			<BookImage />
			<p>We can't find the page you are looking for :/</p>
			<StyledGoBack onClick={() => goBack()}>Go back</StyledGoBack>
		</div>
	);
}
