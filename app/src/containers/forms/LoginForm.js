import React, { useState } from 'react';
import {
  StyledLoginBox,
  StyledInput,
  StyledBlueButton,
} from '../../components/styledComponents/index';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../../redux/actions/auth';

const LoginForm = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const { username, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    login(username, password);
  };

  if (isAuthenticated) {
    return <Redirect to="/admin_menu" />;
  }

  return (
    <div className="d-flex flex-column justify-content-center align-items-center loginForm">
      <StyledLoginBox className="d-flex justify-content-center">
        <form
          className="d-flex justify-content-center align-items-center flex-column"
          onSubmit={(e) => onSubmit(e)}
        >
          <h1 className="title mb-4">Logowanie do platformy</h1>
          <StyledInput
            id="name"
            type="text"
            placeholder="login"
            className="mb-4"
            name="username"
            value={username}
            onChange={(e) => onChange(e)}
            required
          />
          <StyledInput
            id="password"
            type="password"
            placeholder="hasło"
            name="password"
            value={password}
            onChange={(e) => onChange(e)}
            required
          />
          <StyledBlueButton type="submit" className="mt-4">
            zaloguj się
          </StyledBlueButton>
          <Link className="mt-3 link" to="/reset_password">
            zapomniałem hasła
          </Link>
        </form>
      </StyledLoginBox>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(LoginForm);
