import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { register } from '../../redux/actions/auth';
import {
  StyledInput,
  StyledLoginBox,
  StyledBlueButton,
} from '../../components/styledComponents/index';
import { BackButton } from '../../components/buttons/BackButton';

import PropTypes from 'prop-types';

const RegisterForm = ({ register, isAuthenticated }) => {
  RegisterForm.propTypes = {
    register: PropTypes.func,
    isAuthenticated: PropTypes.bool,
  };

  const [accountCreated, setAccountCreated] = useState(false);
  const [formData, setFormData] = useState({
		username: '',
		email: '',
  });

  const { username, email } = formData;

  const onChange = (e) =>
		setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
		e.preventDefault();
		register(username, email);
		setAccountCreated(true);
  };

//   if (accountCreated) {
// 		return <Redirect to='/admin_menu' />;
//   }

  return (
		<div className='d-flex justify-content-center align-items-center flex-column loginForm'>
			<form onSubmit={(e) => onSubmit(e)}>
				<div class='d-flex justify-content-center mb-5'>
					<BackButton />
					<h1 className='title ml-2'>Zarejestruj korepetytora</h1>
				</div>
				<StyledLoginBox className='d-flex justify-content-center align-items-center flex-column'>
					<StyledInput
						id='name'
						type='text'
						placeholder='login'
						className='mt-md-2 mb-1'
						name='username'
						value={username}
						onChange={(e) => onChange(e)}
						required
					/>
					<StyledInput
						id='email'
						type='email'
						placeholder='email'
						className='mt-md-2 mb-1'
						name='email'
						value={email}
						onChange={(e) => onChange(e)}
						required
					/>
					<StyledBlueButton type='submit'>Zarejestruj</StyledBlueButton>
				</StyledLoginBox>
			</form>
		</div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { register })(RegisterForm);
