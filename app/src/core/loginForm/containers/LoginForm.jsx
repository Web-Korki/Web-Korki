import React, { useState } from 'react';
import content from '../../constans/loginFormIndex';
import { useForm } from 'react-hook-form';

export const LoginForm = () => {
	return (
		<div
			className='d-flex justify-content-center align-items-center flex-column'
			style={{ height: '100vh' }}>
			<div className='login-wrapper d-flex justify-content-center flex-column'>
				<h1 className='align-self-center'>Login</h1>
				<label htmlFor='username'>Username</label>
				<input type='text' name='username' placeholder='username' />
				<label htmlFor='password'>Password</label>
				<input
					type='password'
					name='password'
					placeholder='enter your password'
				/>
				<button type='submit' className='mt-2'>
					Log in
				</button>
			</div>
		</div>
	);
};
