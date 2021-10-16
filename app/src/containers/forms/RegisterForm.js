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
      isAuthenticated: PropTypes.object,
   };

   const [accountCreated, setAccountCreated] = useState(false);
   const [formData, setFormData] = useState({
      username: '',
      email: '',
      password: '',
      re_password: '',
   });

   const { username, email, password, re_password } = formData;

   const onChange = (e) =>
      setFormData({ ...formData, [e.target.name]: e.target.value });

   const onSubmit = (e) => {
      e.preventDefault();

      if (password === re_password) {
         register(username, email, password, re_password);
         setAccountCreated(true);
      }
   };

   // if(userType !== admin){
   // 	// alert -> zarejestruj się jako admin
   // 	return <Redirect to='/login_form' />
   // }

   if (!isAuthenticated) {
      return <Redirect to='/login_form' />;
   }

   if (accountCreated) {
      return <Redirect to='/admin_menu' />;
   }

   return (
      <div className='d-flex justify-content-center align-items-center flex-column loginForm'>
         <form onSubmit={(e) => onSubmit(e)}>
            <StyledLoginBox className='d-flex align-items-center flex-column'>
               <div class='d-flex mb-5 mt-4'>
                  <BackButton />
                  <h1 className='title ml-2'>Zarejestruj korepetytora</h1>
               </div>
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
               <StyledInput
                  id='password'
                  type='password'
                  placeholder='hasło'
                  className='mt-md-2 mb-1'
                  name='password'
                  value={password}
                  onChange={(e) => onChange(e)}
                  required
               />
               <StyledInput
                  id='re_password'
                  type='password'
                  placeholder='powtórz hasło'
                  className='mt-md-2 mb-1'
                  name='re_password'
                  value={re_password}
                  onChange={(e) => onChange(e)}
                  required
               />
               <StyledBlueButton type='submit' className='mt-4 px-5 py-2'>
                  Zarejestruj
               </StyledBlueButton>
            </StyledLoginBox>
         </form>
      </div>
   );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { register })(RegisterForm);
