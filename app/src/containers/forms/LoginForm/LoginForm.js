//react
import React, { useState } from 'react';
//redux
import { connect } from 'react-redux';
import { login } from '../../../redux/actions/auth';
//router
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';
//utils
import {
  Wrapper,
  Input,
  BlueButton,
} from '../../../components/styledComponents/index';

//font awesome:
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

import PropTypes from 'prop-types';

const LoginForm = ({
  login,
  isAuthenticated,
  loginSuccess,
  isSuperuser,
  defaultPasswordChanged,
  hasChangedPassword,
}) => {
  LoginForm.propTypes = {
    login: PropTypes.func,
    isAuthenticated: PropTypes.bool,
    loginSuccess: PropTypes.bool,
    isSuperuser: PropTypes.bool,
    defaultPasswordChanged: PropTypes.bool.isRequired,
    hasChangedPassword: PropTypes.bool,
  };

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
    if (defaultPasswordChanged && hasChangedPassword) {
      return <Redirect push to="/admin_user" />;
    } else if (!defaultPasswordChanged && !hasChangedPassword) {
      return <Redirect push to="/initialPasswordReset" />;
    }
  } else if (isAuthenticated && !isSuperuser) {
    if (defaultPasswordChanged && hasChangedPassword) {
      return <Redirect push to="/user_menu" />;
    } else if (!defaultPasswordChanged && !hasChangedPassword) {
      return <Redirect push to="/initialPasswordReset" />;
    }
  }

  return (
    <div className="min-h-100 d-flex flex-column justify-content-center align-items-center">
      <Wrapper>
        <form
          className="d-flex justify-content-between align-items-center flex-column"
          onSubmit={(e) => onSubmit(e)}
        >
          <h1 className="title mb-5">Logowanie do platformy</h1>
          <Input
            id="name"
            type="text"
            placeholder="login"
            className={`mb-4 ${
              loginSuccess === false ? 'border border-danger' : null
            }`}
            name="username"
            value={username}
            onChange={(e) => onChange(e)}
            required
          />
          <div className="position-relative">
            <Input
              id="password"
              type={passwordShown ? 'text' : 'password'}
              placeholder="hasło"
              name="password"
              className={`${
                loginSuccess === false ? 'border border-danger' : null
              }`}
              value={password}
              onChange={(e) => onChange(e)}
              required
            />
            <i
              className="position-absolute eye-icon"
              onClick={() => togglePasswordShow()}
            >
              {<FontAwesomeIcon icon={passwordShown ? faEyeSlash : faEye} />}
            </i>
          </div>

          <BlueButton type="submit" className="mt-5 mb-3">
            zaloguj się
          </BlueButton>
          <Link className="link" to="/reset_password">
            nie pamiętam hasła
          </Link>
        </form>
      </Wrapper>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  loginSuccess: state.auth.loginSuccess,
  isSuperuser: state.auth.isSuperuser,
  defaultPasswordChanged: state.auth.defaultPasswordChanged,
  hasChangedPassword: state.auth.user?.is_resetpwd,
});

export default connect(mapStateToProps, { login })(LoginForm);
