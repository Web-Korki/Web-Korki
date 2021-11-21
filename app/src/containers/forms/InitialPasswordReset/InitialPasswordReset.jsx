//react
import React, { useState } from 'react';
//redux
import { connect } from 'react-redux';
import { change_default_password } from '../../../redux/actions/auth';
//router
import { Redirect } from 'react-router-dom';
//utils
import {
  BlueButton,
  Input,
  Wrapper,
} from '../../../components/styledComponents/index';

const InitialPasswordReset = ({
  id,
  defaultPassowrdChanged,
  change_default_password,
}) => {
  const [requestSent, setRequestSent] = useState(false);
  const [formData, setFormData] = useState({
    fb_name: '',
    old_password: '',
    new_password: '',
  });

  const { fb_name, old_password, new_password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    change_default_password(id, fb_name, old_password, new_password);

    setRequestSent(true);
  };

  if (requestSent && defaultPassowrdChanged) {
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
            placeholder="stare hasło"
            name="old_password"
            value={old_password}
            onChange={(e) => onChange(e)}
            required
          />
          <Input
            id="retype_password"
            type="password"
            className="mb-3 mb-md-4"
            placeholder="nowe hasło"
            name="new_password"
            value={new_password}
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
  defaultPassowrdChanged: state.auth.defaultPassowrdChanged,
});

export default connect(mapStateToProps, { change_default_password })(
  InitialPasswordReset
);
