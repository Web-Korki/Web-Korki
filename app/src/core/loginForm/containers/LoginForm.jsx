import React, { useState } from 'react';
import content from '../../constans/loginFormIndex';
import { useForm } from 'react-hook-form';

import {
	StyledLoginBox,
	StyledInput,
	StyledSubmitButton,
} from '../styledComponents/index';

export const LoginForm = () => {
	return (
		<div
			className='d-flex justify-content-center align-items-center flex-column'
			style={{ height: '100vh' }}>
			<StyledLoginBox className='d-flex align-items-center flex-column'>
				<h1 className='mt-5'>Logowanie do platformy</h1>
				<StyledInput type='text' placeholder='login' className='mt-5 mb-4' />
				<StyledInput type='password' placeholder='hasło' />
				<StyledSubmitButton type='submit' className='mt-4'>
					zaloguj się
				</StyledSubmitButton>
			</StyledLoginBox>
		</div>
	);
};
