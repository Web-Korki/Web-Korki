import React, { useState } from 'react';
import content from '../../constans/loginFormIndex';
import { useForm } from 'react-hook-form';

export const LoginForm = () => {
	const { register, handleSubmit, errors } = useForm('');

	const onSubmit = (data) => console.log(data);

	return (
		<div
			className='d-flex justify-content-center align-items-center flex-column'
			style={{ height: '100vh' }}>
			<h1 className='mb-5'>Sign In</h1>
			<form onSubmit={() => handleSubmit(onSubmit)}>
				{content.inputs.map((input, key) => {
					return (
						<div key={key}>
							<p>
								<label className='login-label'>{input.label}</label>
							</p>
							<p>
								<input
									className='login-input'
									name={input.name}
									type={input.type}
									ref={register}
									placeholder={input.placeholder}
								/>
							</p>
						</div>
					);
				})}
				<button className='login-btn' type='submit'>
					submit
				</button>
			</form>
		</div>
	);
};
