//react
import React, { useState } from 'react';
//redux
import { connect } from 'react-redux';
import {
  change_password_validation_error,
  reset_password_confirm,
} from '../../redux/actions/auth';
//router
import { Redirect, useParams } from 'react-router-dom';
//utils
import {
  BlueButton,
  Input,
  Wrapper,
} from '../../components/styledComponents/index';
//font awesome:
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
//propTypes:
import PropTypes from 'prop-types';

const ResetPasswordConfirm = ({ reset_password_confirm }) => {
  ResetPasswordConfirm.propTypes = {
    reset_password_confirm: PropTypes.func.isRequired,
  };

  const { uid, token } = useParams();
  //REQUEST CONTROL
  const [requestSent, setRequestSent] = useState(false);

  //FORM STATE:
  const [formData, setFormData] = useState({
    new_password: '',
    re_new_password: '',
  });

  //STATES FOR VALIDATION:
  const [lowerCase, setLowerCase] = useState(false);
  const [upperCase, setUpperCase] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const [specialCharacters, setSpecialCharacters] = useState(false);
  const [longEnough, setLongEnough] = useState(false);
  const [changingPassword, setChangingPassword] = useState(false);

  //STATES FOR EYEBALL:
  const [newPasswordShown, setNewPasswordShown] = useState(false);
  const [repeatPasswordShown, setRepeatPasswordShown] = useState(false);

  //FORM:
  const { new_password, re_new_password } = formData;

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

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();

    if (lowerCase && upperCase && numbers && specialCharacters && longEnough) {
      if (new_password === re_new_password) {
        reset_password_confirm(uid, token, new_password, re_new_password);
        setRequestSent(true);
        setChangingPassword(false);
      } else {
        change_password_validation_error('Hasła muszą być takie same!');
        //TO DO: check similarity of passwords
      }
    } else {
      change_password_validation_error(
        'Nowe hasło nie spełnia kryteriów bezpieczeństwa'
      );
    }
  };

  //TOGGLERS:
  const toggleNewPasswordShow = () => {
    setNewPasswordShown(newPasswordShown ? false : true);
  };
  const toggleRepeatPasswordShow = () => {
    setRepeatPasswordShown(repeatPasswordShown ? false : true);
  };

  if (requestSent) {
    return <Redirect to="/login_form" />;
  }

  return (
    <div className="resetPasswordConfirm h-100 d-flex flex-column justify-content-center align-items-center">
      <Wrapper className="d-flex flex-column justify-content-center align-items-center">
        <h1 className="title mb-4">Resetuj hasło</h1>
        <form
          className="d-flex align-items-center flex-column"
          onSubmit={(e) => onSubmit(e)}
        >
          <p className="text">Podaj nowe hasło</p>
          <div class="position-relative mb-3 mb-md-4">
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
              required
            />
            <i
              className="position-absolute eye-icon"
              onClick={() => toggleNewPasswordShow()}
            >
              {<FontAwesomeIcon icon={newPasswordShown ? faEyeSlash : faEye} />}
            </i>
          </div>
          <p className="text">Powtórz nowe hasło</p>
          <div class="position-relative mb-3 mb-md-4">
            <Input
              id="re_new_password"
              type={repeatPasswordShown ? 'text' : 'password'}
              className="mb-3 mb-md-4"
              placeholder="potwierdź nowe hasło"
              name="re_new_password"
              value={re_new_password}
              onChange={(e) => onChange(e)}
              required
            />
            <i
              className="position-absolute eye-icon"
              onClick={() => toggleRepeatPasswordShow()}
            >
              {
                <FontAwesomeIcon
                  icon={repeatPasswordShown ? faEyeSlash : faEye}
                />
              }
            </i>
          </div>
          <BlueButton type="submit">ustaw nowe hasło</BlueButton>
        </form>
      </Wrapper>

      {/* PASSWORD VALIDATION: */}
      {changingPassword ? (
        <Wrapper className="mt-5 mx-5">
          <div className="text-sm">
            <p className="m-0">
              Twoje nowe hasło powinno być nie krótsze niż{' '}
              <span
                className={`fst-italic ${
                  longEnough ? 'text-green' : 'text-red'
                }`}
              >
                8 znaków
              </span>{' '}
              i zawierać przynajmniej jeden/jedną:{' '}
              <span
                className={`fst-italic ${
                  lowerCase ? 'text-green' : 'text-red'
                }`}
              >
                małą literę
              </span>
              {', '}
              <span
                className={`fst-italic ${
                  upperCase ? 'text-green' : 'text-red'
                }`}
              >
                dużą literę
              </span>
              {', '}
              <span
                className={`fst-italic ${numbers ? 'text-green' : 'text-red'}`}
              >
                cyfrę
              </span>
              {', '}
              <span
                className={`fst-italic ${
                  specialCharacters ? 'text-green' : 'text-red'
                }`}
              >
                znak specjalny
              </span>
              .
            </p>
          </div>
        </Wrapper>
      ) : null}
    </div>
  );
};

export default connect(null, { reset_password_confirm })(ResetPasswordConfirm);
