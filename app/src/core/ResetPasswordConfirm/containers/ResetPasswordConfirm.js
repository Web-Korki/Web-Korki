import React, { useState } from 'react';
import { StyledBlueButton } from '../../sharedComponents/styledComponents';
import { StyledInput,StyledLoginBox } from '../../loginForm/styledComponents';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { reset_password_confirm } from '../../../redux/actions/auth';

const ResetPasswordConfirm = ({ match, reset_password_confirm }) => {
    const [requestSent, setRequestSent] = useState(false)
	const [formData, setFormData] = useState({
		new_password: '',
		re_new_password: ''
	})

	const { new_password, re_new_password } = formData;
	
	const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value })
	
	const onSubmit = e => {
		e.preventDefault();

        const uid = match.params.uid;
        const token = match.params.token;

		reset_password_confirm(uid, token, new_password, re_new_password);
        setRequestSent(true);
	};

	if(requestSent){
		return <Redirect to='/admin_menu' />
	}

	return (
		<div className='d-flex justify-content-center align-items-center flex-column resetPasswordConfirm'>
			<form onSubmit={e => onSubmit(e)}>
				<StyledLoginBox className='d-flex align-items-center flex-column pt-4'>
					<h1 className='mt-md-5 mb-3'>Resetuj hasło</h1>
					<StyledInput
						id='password'
						type='password'
						placeholder='nowe hasło'
						name='new_password'
						value={new_password}
						onChange={e => onChange(e)}
						required
					/>
                    <StyledInput
						id='password'
						type='password'
						placeholder='potwierdź nowe hasło'
						name='re_new_password'
						value={re_new_password}
						onChange={e => onChange(e)}
						required
					/>
					<StyledBlueButton type='submit' className='mt-4 px-5 py-2'>
						ustaw nowe hasło
					</StyledBlueButton>
				</StyledLoginBox>
			</form>
		</div>
	);
};

export default connect(null, { reset_password_confirm })(ResetPasswordConfirm)