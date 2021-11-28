//react
import React, { useState } from 'react';
//redux
import { connect } from 'react-redux';
import { reset_password } from '../../redux/actions/auth';
//router
import { Redirect } from 'react-router-dom';
//utils
import {
  BlueButton,
  Input,
  Wrapper,
} from '../../components/styledComponents/index';
//propTypes
import PropTypes from 'prop-types';

const ResetPassword = ({ reset_password }) => {
  ResetPassword.propTypes = {
    reset_password: PropTypes.func.isRequired,
  };

  const [requestSent, setRequestSent] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
  });

  const { email } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    reset_password(email);
    setRequestSent(true);
  };

  if (requestSent) {
    return <Redirect to="/admin_menu" />;
  }

  return (
    <div className="min-h-100 py-5 py-lg-0 d-flex flex-column justify-content-center align-items-center">
      <Wrapper>
        <h1 className="title mb-4">Zresetuj hasło</h1>
        <form
          className="d-flex flex-column justify-content-center align-items-center"
          onSubmit={(e) => onSubmit(e)}
        >
          <p className="text">Podaj adres email</p>
          <Input
            id="name"
            type="text"
            placeholder="email"
            className="mb-4"
            name="email"
            value={email}
            onChange={(e) => onChange(e)}
            required
          />
          <BlueButton type="submit">wyślij</BlueButton>
        </form>
      </Wrapper>
    </div>
  );
};

export default connect(null, { reset_password })(ResetPassword);
