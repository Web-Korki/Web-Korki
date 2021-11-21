//react
import React, { useState } from 'react';
//redux
import { connect } from 'react-redux';
import {
  change_default_password,
  change_default_password_validation_error,
} from '../../../redux/actions/auth';
//router
import { Redirect } from 'react-router-dom';
//utils
import {
  BlueButton,
  Input,
  Wrapper,
} from '../../../components/styledComponents/index';
//propTypes:
import PropTypes from 'prop-types';

const InitialPasswordReset = ({
  id,
  defaultPassowrdChanged,
  change_default_password,
  change_default_password_validation_error,
}) => {
  InitialPasswordReset.propTypes = {
    id: PropTypes.number.isRequired,
    defaultPassowrdChanged: PropTypes.bool.isRequired,
    change_default_password: PropTypes.func.isRequired,
    change_default_password_validation_error: PropTypes.func.isRequired,
  };

  const [formData, setFormData] = useState({
    fb_name: '',
    old_password: '',
    new_password: '',
  });
  const [lowerCase, setLowerCase] = useState(false);
  const [upperCase, setUpperCase] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const [specialCharacters, setSpecialCharacters] = useState(false);
  const [longEnough, setLongEnough] = useState(false);
  const [changingPassword, setChangingPassword] = useState(false);

  const { fb_name, old_password, new_password } = formData;

  const passwordValidation = (e) => {
    setChangingPassword(true);
    const lowerCase = /[a-z]/g;
    const upperCase = /[A-Z]/g;
    const numbers = /[0-9]/g;
    const specialCharacters = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/g;

    lowerCase.test(e.target.value) ? setLowerCase(true) : setLowerCase(false);
    upperCase.test(e.target.value) ? setUpperCase(true) : setUpperCase(false);
    numbers.test(e.target.value) ? setNumbers(true) : setNumbers(false);
    specialCharacters.test(e.target.value)
      ? setSpecialCharacters(true)
      : setSpecialCharacters(false);
    e.target.value.length >= 8 ? setLongEnough(true) : setLongEnough(false);
  };

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();

    if (new_password !== old_password) {
      change_default_password(id, fb_name, old_password, new_password);
    } else {
      change_default_password_validation_error(
        'Stare i nowe hasło nie mogą być identyczne!'
      );

      //TO DO: check similarity of passwords
    }
  };

  if (defaultPassowrdChanged) {
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
            id="new_password"
            type="password"
            className="mb-3 mb-md-4"
            placeholder="nowe hasło"
            name="new_password"
            value={new_password}
            onChange={(e) => {
              onChange(e);
              passwordValidation(e);
            }}
            onFocus={() => setChangingPassword(true)}
            onBlur={() => setChangingPassword(false)}
            required
          />
          <BlueButton className="mt-5" type="submit">
            Zatwierdź
          </BlueButton>
        </form>
      </Wrapper>
      {changingPassword ? (
        <Wrapper className="d-flex flex-column justify-content-center align-items-center">
          <div className="text-sm">
            <p>Twoje nowe hasło musi spełniać następujące wymagania:</p>
            <p
              className={`fst-italic ${lowerCase ? 'text-green' : 'text-red'}`}
            >
              Małe litery {lowerCase ? <span>&#10004;</span> : null}
            </p>
            <p
              className={`fst-italic ${upperCase ? 'text-green' : 'text-red'}`}
            >
              Duże litery {upperCase ? <span>&#10004;</span> : null}
            </p>
            <p className={`fst-italic ${numbers ? 'text-green' : 'text-red'}`}>
              Przynajmniej jedną cyfrę {numbers ? <span>&#10004;</span> : null}
            </p>
            <p
              className={`fst-italic ${
                specialCharacters ? 'text-green' : 'text-red'
              }`}
            >
              Przynajmniej jeden znak specjalny{' '}
              {specialCharacters ? <span>&#10004;</span> : null}
            </p>
            <p
              className={`fst-italic ${longEnough ? 'text-green' : 'text-red'}`}
            >
              Hasło musi być dłuższe niż 8 znaków{' '}
              {longEnough ? <span>&#10004;</span> : null}
            </p>
          </div>
        </Wrapper>
      ) : null}
    </div>
  );
};

const mapStateToProps = (state) => ({
  id: state.auth.user?.id,
  defaultPassowrdChanged: state.auth.defaultPassowrdChanged,
});

export default connect(mapStateToProps, {
  change_default_password,
  change_default_password_validation_error,
})(InitialPasswordReset);
