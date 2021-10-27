import React, { useState } from 'react';
import {
  BlueButton,
  Input,
  LoginBox,
} from '../../components/styledComponents/index';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { reset_password } from '../../redux/actions/auth';

const ResetPassword = ({ reset_password }) => {
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
    <div className="d-flex justify-content-center align-items-center flex-column resetPassword">
      <form onSubmit={(e) => onSubmit(e)}>
        <LoginBox className="d-flex align-items-center flex-column pt-4">
          <h1 className="mt-md-5 mb-3">Podaj adres e-mail</h1>
          <Input
            id="name"
            type="text"
            placeholder="email"
            className="mt-md-5 mt-4 mb-4"
            name="email"
            value={email}
            onChange={(e) => onChange(e)}
            required
          />
          <BlueButton type="submit" className="mt-4 px-5 py-2">
            zresetuj hasło
          </BlueButton>
        </LoginBox>
      </form>
    </div>
  );
};

export default connect(null, { reset_password })(ResetPassword);
