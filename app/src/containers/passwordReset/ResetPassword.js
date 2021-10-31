import React, { useState } from 'react';
import {
  BlueButton,
  Input,
  Wrapper,
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
    <div className="min-h-100 py-5 py-lg-0 d-flex flex-column justify-content-center align-items-center">
      <Wrapper>
        <form
          className="d-flex flex-column justify-content-center align-items-center"
          onSubmit={(e) => onSubmit(e)}
        >
          <h1 className="title mb-4">Podaj adres e-mail</h1>
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
          <BlueButton type="submit">zresetuj hasło</BlueButton>
        </form>
      </Wrapper>
    </div>
  );
};

export default connect(null, { reset_password })(ResetPassword);
