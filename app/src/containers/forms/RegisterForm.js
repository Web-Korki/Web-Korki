import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { register } from "../../redux/actions/auth";
import {
  Input,
  Wrapper,
  BlueButton,
} from "../../components/styledComponents/index";
import { BackButton } from "../../components/buttons/BackButton";

import PropTypes from "prop-types";

const RegisterForm = ({ register, accountCreated }) => {
  RegisterForm.propTypes = {
    register: PropTypes.func.isRequired,
    accountCreated: PropTypes.bool.isRequired,
  };

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
  };

  if (accountCreated) {
    return <Redirect push to="/admin_menu" />;
  }

  return (
    <div className="min-h-100 d-flex justify-content-center align-items-center flex-column">
      <form onSubmit={(e) => onSubmit(e)}>
        <div class="d-flex justify-content-center align-items-center mb-5">
          <BackButton />
          <h1 className="title">Zarejestruj korepetytora</h1>
        </div>
        <Wrapper>
          <p className="text">Nazwa użytkownika</p>
          <Input
            id="name"
            type="text"
            placeholder="login"
            className="mb-4"
            name="username"
            value={username}
            onChange={(e) => onChange(e)}
            required
          />
          <p className="text">Email wolontariusza</p>
          <Input
            id="email"
            type="email"
            placeholder="email"
            className="mb-4 "
            name="email"
            value={email}
            onChange={(e) => onChange(e)}
            required
          />
          <BlueButton type="submit">zarejestruj</BlueButton>
        </Wrapper>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => ({
  accountCreated: state.auth.accountCreated,
});

export default connect(mapStateToProps, { register })(RegisterForm);
