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
//font awesome:
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
//propTypes:
import PropTypes from 'prop-types';

const InitialPasswordReset = ({
  id,
  defaultPasswordChanged,
  change_default_password,
  change_default_password_validation_error,
}) => {
  InitialPasswordReset.propTypes = {
    id: PropTypes.number.isRequired,
    defaultPasswordChanged: PropTypes.bool.isRequired,
    change_default_password: PropTypes.func.isRequired,
    change_default_password_validation_error: PropTypes.func.isRequired,
  };

  //FORM STATE:
  const [formData, setFormData] = useState({
    fb_name: '',
    old_password: '',
    new_password: '',
  });

  //STATES FOR VALIDATION:
  const [lowerCase, setLowerCase] = useState(false);
  const [upperCase, setUpperCase] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const [specialCharacters, setSpecialCharacters] = useState(false);
  const [longEnough, setLongEnough] = useState(false);
  const [changingPassword, setChangingPassword] = useState(false);

  //STATES FOR EYEBALL:
  const [oldPasswordShown, setOldPasswordShown] = useState(false);
  const [newPasswordShown, setNewPasswordShown] = useState(false);

  //FORM:
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

  //TOGGLERS:
  const toggleOldPasswordShow = () => {
    setOldPasswordShown(oldPasswordShown ? false : true);
  };
  const toggleNewPasswordShow = () => {
    setNewPasswordShown(newPasswordShown ? false : true);
  };

  //REDIRECT:
  if (defaultPasswordChanged) {
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
          <div className="position-relative">
            <Input
              id="password"
              type={oldPasswordShown ? 'text' : 'password'}
              className="mb-3 mb-md-4"
              placeholder="stare hasło"
              name="old_password"
              value={old_password}
              onChange={(e) => onChange(e)}
              required
            />
            <i
              className="position-absolute eye-icon-large"
              onClick={() => toggleOldPasswordShow()}
            >
              {<FontAwesomeIcon icon={oldPasswordShown ? faEyeSlash : faEye} />}
            </i>
          </div>
          <div className="position-relative">
            <Input
              id="new_password"
              type={newPasswordShown ? 'text' : 'password'}
              className="mb-3 mb-md-4"
              placeholder="nowe hasło"
              name="new_password"
              value={new_password}
              onChange={(e) => {
                onChange(e);
                passwordValidation(e);
              }}
              onBlur={() => setChangingPassword(false)}
              required
            />
            <i
              className="position-absolute eye-icon-large"
              onClick={() => toggleNewPasswordShow()}
            >
              {<FontAwesomeIcon icon={newPasswordShown ? faEyeSlash : faEye} />}
            </i>
          </div>
          <BlueButton className="mt-5" type="submit">
            Zatwierdź
          </BlueButton>
        </form>
      </Wrapper>

      {/* PASSWORD VALIDATION: */}
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
  defaultPasswordChanged: state.auth.defaultPasswordChanged,
});

export default connect(mapStateToProps, {
  change_default_password,
  change_default_password_validation_error,
})(InitialPasswordReset);
