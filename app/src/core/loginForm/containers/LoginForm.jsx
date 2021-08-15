import React, { useState } from 'react';
import axios from 'axios';

import { StyledLoginBox, StyledInput } from '../styledComponents/index';

import { StyledBlueButton } from '../../sharedComponents/styledComponents';

export const LoginForm = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();

		// axios
		// 	.post('http://nujgoiz.cluster024.hosting.ovh.net/token/obtain/', {
		// 		username: email,
		// 		password: password,
		// 	})
		// 	.then((res) => {
		// 		console.log(res);
		// 	})
		// 	.catch((error) => {
		// 		console.log(error);
		// 	});
		axios
			.post('http://nujgoiz.cluster024.hosting.ovh.net/api/auth/login/', {
				username: email,
				password: password,
			})
			.then((res) => {
				console.log(res);
			})
			.catch(function (error) {
				console.log(error);
			});
	};

	return (
		<div className='d-flex justify-content-center align-items-center flex-column loginForm'>
			<StyledLoginBox className='d-flex align-items-center flex-column'>
				<h1 className='mt-md-5 mb-3'>Logowanie do platformy</h1>
				<StyledInput
					id='name'
					type='text'
					placeholder='login'
					className='mt-md-5 mt-4 mb-4'
					onChange={(e) => setEmail(e.target.value)}
				/>
				<StyledInput
					id='password'
					type='password'
					placeholder='hasło'
					onChange={(e) => setPassword(e.target.value)}
				/>
				<StyledBlueButton
					type='submit'
					className='mt-4 px-5 py-2'
					onClick={handleSubmit}>
					zaloguj się
				</StyledBlueButton>
			</StyledLoginBox>
		</div>
	);
};
