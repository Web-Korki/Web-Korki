import React, { useState } from 'react';
import {
  StyledBlueButton,
  StyledInput,
  StyledLoginBox,
} from '../../components/styledComponents/index';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { reset_password_confirm } from '../../redux/actions/auth';

const ResetPasswordConfirm = ({ match, reset_password_confirm }) => {
  const [requestSent, setRequestSent] = useState(false);
  const [formData, setFormData] = useState({
    new_password: '',
    re_new_password: '',
  });

  const { new_password, re_new_password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();

    const uid = match.params.uid;
    const token = match.params.token;

    reset_password_confirm(uid, token, new_password, re_new_password);
    setRequestSent(true);
  };

  if (requestSent) {
    return <Redirect to="/admin_menu" />;
  }

  return (
    <div className="resetPasswordConfirm d-flex flex-column justify-content-center align-items-center">
      <StyledLoginBox className="d-flex flex-column justify-content-center align-items-center">
        <h1 className="title mb-4">Resetuj hasło</h1>
        <form
          className="d-flex align-items-center flex-column"
          onSubmit={(e) => onSubmit(e)}
        >
          <StyledInput
            id="password"
            type="password"
            className="mb-3 mb-md-4"
            placeholder="nowe hasło"
            name="new_password"
            value={new_password}
            onChange={(e) => onChange(e)}
            required
          />
          <StyledInput
            id="password"
            type="password"
            className="mb-3 mb-md-4"
            placeholder="potwierdź nowe hasło"
            name="re_new_password"
            value={re_new_password}
            onChange={(e) => onChange(e)}
            required
          />
          <StyledBlueButton type="submit">ustaw nowe hasło</StyledBlueButton>
        </form>
      </StyledLoginBox>
    </div>
  );
};

export default connect(null, { reset_password_confirm })(ResetPasswordConfirm);
