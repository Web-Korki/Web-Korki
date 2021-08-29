import React, { useState } from 'react';
import { StyledInput, StyledLoginBox } from '../../loginForm/styledComponents';
import { StyledBlueButton } from '../../sharedComponents/styledComponents';

export const RegisterForm = () => {
	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [password2, setPassword2] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(username, email, password, password2);
	};

	return (
		<div className='d-flex justify-content-center align-items-center flex-column registerForm'>
			<form onSubmit={handleSubmit}>
				<StyledLoginBox className='d-flex align-items-center flex-column'>
					<h1 className='mt-md-4 mb-1 p-2'>Zarejestruj wolontariusza</h1>
					<StyledInput
						id='name'
						type='text'
						placeholder='login'
						className='mt-md-4 mt-4 mb-4'
						onChange={(e) => setUsername(e.target.value)}
						value={username}
					/>
					<StyledInput
						id='email'
						type='email'
						placeholder='email'
						className='mb-4'
						onChange={(e) => setEmail(e.target.value)}
						value={email}
					/>
					<StyledInput
						id='password'
						type='password'
						placeholder='hasło'
						className='mb-4'
						onChange={(e) => setPassword(e.target.value)}
						value={password}
					/>
					<StyledInput
						id='password2'
						type='password'
						placeholder='powtórz hasło'
						onChange={(e) => setPassword2(e.target.value)}
						value={password2}
					/>
					<StyledBlueButton type='submit' className='mt-4 px-5 py-2'>
						Zarejestruj
					</StyledBlueButton>
				</StyledLoginBox>
			</form>
		</div>
	);
};
