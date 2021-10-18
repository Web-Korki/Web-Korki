import React from 'react';
import './Alerts.css';

const AlertTemplate = ({ style, options, message, close }) => (
	<div
		className={`alert-block alert-type-${
			options.type === 'info'
				? 'info'
				: options.type === 'success'
				? 'success'
				: 'error'
		}`}
		style={{
			marginTop: '20px',
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
		}}>
		{options.type === 'info'}
		{options.type === 'success'}
		{options.type === 'error'}
		{message}

		{/*TO DO: INVESTIGATE WHY THE FUCK THE BELOW SHIT ISN'T WORKING AT ALL?! */}
		{/* <button className='alert-button' onClick={() => close()}>
			&times;
		</button> */}
	</div>
);

export default AlertTemplate;
