//react
import React, { useState } from 'react';
//redux
import { connect } from 'react-redux';
import auth from '../../../redux/reducers/auth';
//router
import { Redirect } from 'react-router-dom';
//utils
import {
  BlueButton,
  Input,
  Wrapper,
} from '../../../components/styledComponents/index';

const InitialPasswordReset = ({ id }) => {
  const [requestSent, setRequestSent] = useState(false);
  const [formData, setFormData] = useState({
    fb_name: '',
    new_password: '',
    re_new_password: '',
  });

  const { fb_name, new_password, re_new_password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();

    setRequestSent(true);
  };

  if (requestSent) {
    return <Redirect to="/admin_menu" />;
  }

  return (
    <div className="resetPasswordConfirm d-flex flex-column justify-content-center align-items-center h-100">
      <Wrapper className="d-flex flex-column justify-content-center align-items-center">
        <h1 className="title mb-4">Ustaw własne hasło</h1>
        <form
          className="d-flex align-items-center flex-column"
          onSubmit={(e) => onSubmit(e)}
        >
          <Input
            id="fb_name"
            type="text"
            className="mb-3 mb-md-4"
            placeholder="twój login na facebooku"
            name="fb_name"
            value={fb_name}
            onChange={(e) => onChange(e)}
            required
          />
          <Input
            id="password"
            type="password"
            className="mb-3 mb-md-4"
            placeholder="nowe hasło"
            name="new_password"
            value={new_password}
            onChange={(e) => onChange(e)}
            required
          />
          <Input
            id="retype_password"
            type="password"
            className="mb-3 mb-md-4"
            placeholder="potwierdź nowe hasło"
            name="re_new_password"
            value={re_new_password}
            onChange={(e) => onChange(e)}
            required
          />
          <BlueButton type="submit">Zatwierdź</BlueButton>
        </form>
      </Wrapper>
    </div>
  );
};

const mapStateToProps = (state) => ({
  id: state.auth.user?.id,
});

export default connect(mapStateToProps)(InitialPasswordReset);
