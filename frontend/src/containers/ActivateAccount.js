//react
import React, { useState } from 'react';
//redux
import { connect } from 'react-redux';
import { verify, reset_state } from '../redux/actions/auth';
//router
import { Redirect, useParams } from 'react-router-dom';
//utils
import { Wrapper, BlueButton } from '../components/styledComponents/index';
//propTypes
import PropTypes from 'prop-types';

const ActivateAccount = ({ accountActivated, verify, reset_state }) => {
  ActivateAccount.propTypes = {
    accountActivated: PropTypes.bool,
    verify: PropTypes.func.isRequired,
    reset_state: PropTypes.func.isRequired,
  };

  const [verified, setVerified] = useState(false);
  const { uid, token } = useParams();
  //uid + token part in regex (?<uid>^[A-Z]{3,})(?<slash>\/)(?<token>.+) matches for eg.NDY/5w0-488f6ea724cf6edd8023

  const verify_account = () => {
    verify(uid, token);
    setVerified(accountActivated);
  };

  if (verified) {
    reset_state();
    return <Redirect to="/login_form" />;
  }

  return (
    <div className="container min-h-100 d-flex justify-content-center align-items-center flex-column">
      <Wrapper>
        <h1 className="title mb-3">Konto zostało aktywowane</h1>
        <p className="text mb-3">Możesz teraz zalogować się do aplikacji</p>
        <BlueButton onClick={verify_account} type="button">
          zaloguj się
        </BlueButton>
      </Wrapper>
    </div>
  );
};

const mapStateToProps = (state) => ({
  accountActivated: state.auth.accountActivated,
});

export default connect(mapStateToProps, { verify, reset_state })(
  ActivateAccount
);
