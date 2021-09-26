import React, { useState } from 'react';
import { StyledLoginBox, StyledInput } from '../styledComponents/index';
import { StyledBlueButton } from '../../sharedComponents/styledComponents';
import { Link, Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../../../redux/actions/auth';

const LoginForm = ({ login, isAuthenticated }) => {
	const [formData, setFormData] = useState({
		username: '',
		password: ''
	})

	const { username, password } = formData;
	
	const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value })
	
	const onSubmit = e => {
		e.preventDefault();
		login(username, password)
	};

	if(isAuthenticated){
		return <Redirect to='/admin_menu' />
	}

	return (
		<div className='d-flex justify-content-center align-items-center flex-column loginForm'>
			<form onSubmit={e => onSubmit(e)}>
				<StyledLoginBox className='d-flex align-items-center flex-column'>
					<h1 className='mt-md-5 mb-3'>Logowanie do platformy</h1>
					<StyledInput
						id='name'
						type='text'
						placeholder='login'
						className='mt-md-5 mt-4 mb-4'
						name='username'
						value={username}
						onChange={e => onChange(e)}
						required
					/>
					<StyledInput
						id='password'
						type='password'
						placeholder='hasło'
						name='password'
						value={password}
						onChange={e => onChange(e)}
						required
					/>
					<StyledBlueButton type='submit' className='mt-4 px-5 py-2'>
						zaloguj się
					</StyledBlueButton>
				</StyledLoginBox>
			</form>
			<Link className='mt-3' to='/reset-password'>Zapomniałem hasła</Link>
		</div>
	);
};

const mapStateToProps = state => ({
	isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { login })(LoginForm)