import React from 'react';
import { useHistory } from 'react-router-dom';
import { StyledGoBack } from '../styledComponents';
import { StyledBook } from '../styledComponents';

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
			<StyledBook>
				<div className='page page-left-top'></div>
				<div className='page page-left-middle'></div>
				<div className='page page-left page-left-bottom'></div>
				<div className='page page-left page-left-bottom-two'></div>
				<div className='page page-left page-left-bottom-three'></div>
				<div className='page page-left page-left-bottom-four'></div>
				<div className='page page-left page-left-bottom-five'></div>
				<div className='page page-left page-left-bottom-six'></div>
				<div className='page page-left page-left-bottom-seven'></div>
				<div className='page page-left page-left-bottom-eight'></div>
				<div className='page page-left page-left-bottom-nine'></div>
				<div className='page page-left page-left-bottom-ten'></div>

				<div className='page page-right-top'>
					<div className='page scrap scrap-1'></div>
				</div>
				<div className='page page-right-middle'>
					<div className='page scrap scrap-2'></div>
					<div className='page scrap scrap-3'></div>
					<div className='page scrap scrap-4'></div>
					<div className='page scrap scrap-5'></div>
					<div className='page scrap scrap-6'></div>
					<div className='page scrap scrap-7'></div>
					<div className='page scrap scrap-8'></div>
					<div className='page scrap scrap-9'></div>
					<div className='page scrap scrap-10'></div>
					<div className='page scrap scrap-11'></div>
					<div className='page scrap scrap-12'></div>
					<div className='page scrap scrap-13'></div>
					<div className='page scrap scrap-14'></div>
					<div className='page scrap scrap-15'></div>
					<div className='page scrap scrap-16'></div>
				</div>
				<div className='page page-right page-right-bottom'></div>
				<div className='page page-right page-right-bottom-two'></div>
				<div className='page page-right page-right-bottom-three'></div>
				<div className='page page-right page-right-bottom-four'></div>
				<div className='page page-right page-right-bottom-five'></div>
				<div className='page page-right page-right-bottom-six'></div>
				<div className='page page-right page-right-bottom-seven'></div>
				<div className='page page-right page-right-bottom-eight'></div>
				<div className='page page-right page-right-bottom-nine'></div>
				<div className='page page-right page-right-bottom-ten'></div>
			</StyledBook>
			<p>We can't find the page you are looking for :/</p>
			<StyledGoBack onClick={() => goBack()}>Go back</StyledGoBack>
		</div>
	);
}
