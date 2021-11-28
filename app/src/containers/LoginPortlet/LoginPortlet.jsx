import React from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

export const LoginPortlet = ({
  username,
  acceptedSubstitutions,
  nextClass,
}) => {
  console.log(username);
  return (
    <>
      <div className="login-portlet-wrapper d-flex">
        <FontAwesomeIcon
          className="login-portlet-user-icon ms-md-5 me-3 mt-2"
          icon={faUserCircle}
        />
        <div className="login-portlet-info-wrapper">
          <span className="login-portlet-user fs-4 ms-md-2">{username}</span>
          <div className="fs-6 ms-md-2">
            {acceptedSubstitutions ? (
              <span className="login-portlet-accepted-substitutions-number">
                Liczba przyjętych zastępstw:
              </span>
            ) : null}
            <p className="login-portlet-next-class">
              {nextClass ? (
                <span>Następne zajęcia: </span>
              ) : (
                <span>Nie zaplanowano zajęć</span>
              )}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  username: state.auth.user?.username,
  // acceptedSubstitutions: state.auth.user.acceptedSubstitutions,
  // nextClass: state.auth.user.nextClass,
});

export default connect(mapStateToProps, {})(LoginPortlet);
