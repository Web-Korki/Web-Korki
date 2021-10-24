//react
import React, { useState } from 'react';
//styles
import './LoginForm.styles.css';
//redux
import { connect } from 'react-redux';
import { login } from '../../../redux/actions/auth';
//router
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';
//utils
import {
	StyledLoginBox,
	StyledInput,
	StyledBlueButton,
	StyledInputPassword,
} from '../../../components/styledComponents/index';

//font awesome:
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';

import PropTypes from 'prop-types';

const LoginForm = ({ login, isAuthenticated, isSuperuser }) => {
	LoginForm.propTypes = {
		login: PropTypes.func,
		isAuthenticated: PropTypes.bool,
		isSuperuser: PropTypes.bool,
	};

	const eye = <FontAwesomeIcon icon={faEye} />;

	const [formData, setFormData] = useState({
		username: '',
		password: '',
	});

	const [passwordShown, setPasswordShown] = useState(false);

	const { username, password } = formData;

	const onChange = (e) =>
		setFormData({ ...formData, [e.target.name]: e.target.value });

	const onSubmit = (e) => {
		e.preventDefault();
		login(username, password);
	};

	const togglePasswordShow = () => {
		setPasswordShown(passwordShown ? false : true);
	};

	if (isAuthenticated && isSuperuser) {
		return <Redirect push to='/admin_menu' />;
	} else if (isAuthenticated && !isSuperuser) {
		return <Redirect push to='/user_menu' />;
	}

	return (
		<div className='d-flex justify-content-center align-items-center loginForm'>
			<StyledLoginBox className='d-flex justify-content-center'>
				<form
					className='d-flex justify-content-center align-items-center flex-column'
					onSubmit={(e) => onSubmit(e)}>
					<h1 className='title mb-4'>Logowanie do platformy</h1>
					<StyledInput
						id='name'
						type='text'
						placeholder='login'
						className='mb-4'
						name='username'
						value={username}
						onChange={(e) => onChange(e)}
						required
					/>
					<div className='password-wrapper'>
						<StyledInputPassword
							id='password'
							type={passwordShown ? 'text' : 'password'}
							placeholder='hasło'
							name='password'
							value={password}
							onChange={(e) => onChange(e)}
							required
						/>
						<i onClick={() => togglePasswordShow()}>{eye}</i>
					</div>
					<StyledBlueButton type='submit' className='mt-4 px-5 py-2'>
						zaloguj się
					</StyledBlueButton>
					<Link className='mt-3 link' to='/reset_password'>
						zapomniałem hasła
					</Link>
				</form>
			</StyledLoginBox>
		</div>
	);
};

const mapStateToProps = (state) => ({
	isAuthenticated: state.auth.isAuthenticated,
	isSuperuser: state.auth.isSuperuser,
});

export default connect(mapStateToProps, { login })(LoginForm);
