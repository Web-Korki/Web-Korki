import React, { useState } from 'react';
import content from '../../constans/loginFormIndex';
import { useForm } from 'react-hook-form';

import { StyledLoginBox, StyledInput } from '../styledComponents/index';

import { StyledBlueButton } from '../../sharedComponents/styledComponents';

export const LoginForm = () => {
	return (
		<div className='d-flex justify-content-center align-items-center flex-column loginForm'>
			<StyledLoginBox className='d-flex align-items-center flex-column'>
				<h1 className='mt-md-5'>Logowanie do platformy</h1>
				<StyledInput type='text' placeholder='login' className='mt-md-5 mb-4' />
				<StyledInput type='password' placeholder='hasło' />
				<StyledBlueButton type='submit' className='mt-4'>
					zaloguj się
				</StyledBlueButton>
			</StyledLoginBox>
		</div>
	);
};
