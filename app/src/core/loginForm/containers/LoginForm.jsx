import React, { useState } from 'react';
import { StyledLoginBox, StyledInput } from '../styledComponents/index';
import { StyledBlueButton } from '../../sharedComponents/styledComponents';
import { Link, Redirect} from 'react-router-dom';
import { connect } from 'react-redux';

// https://jasonwatmore.com/post/2017/09/16/react-redux-user-registration-and-login-tutorial-example
// https://www.youtube.com/watch?v=Fia-GGgHpK0
// https://github.com/axios/axios

const LoginForm = () => {
	const [formData, setFormData] = useState({
		email: '',
		password: ''
	})

	const {email, password} = formData;
	
	const onChange = e => setFormData({...formData, [e.target.name]: e.target.value})
	
	const onSubmit = (e) => {
		e.preventDefault();
		console.log(email, password);
		//login(email, password)
	};

	//Is the user authenticated? => redirect to home page

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
						onChange={e => onChange(e)}
						value={email}
						required
					/>
					<StyledInput
						id='password'
						type='password'
						placeholder='hasło'
						onChange={e => onChange(e)}
						value={password}
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

// const mapStateToProps = state => ({
// 	//is authenticated?
// })

export default connect(null, { })(LoginForm)