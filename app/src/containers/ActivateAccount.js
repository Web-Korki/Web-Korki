import React, { useState } from 'react';
import {
  LoginBox,
  Input,
  BlueButton,
} from '../components/styledComponents/index';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { verify } from '../redux/actions/auth';

const ActivateAccount = ({ verify, match }) => {
  const [verified, setVerified] = useState(false);

  const verify_account = (e) => {
    const uid = match.params.uid;
    const token = match.params.token;

    verify(uid, token);
    setVerified(true);
  };

  if (verified) {
    return <Redirect to="/UserMenu" />;
  }

  return (
    <div className="d-flex justify-content-center align-items-center flex-column activateAccount">
      <LoginBox className="d-flex align-items-center justify-content-center flex-column">
        <h1 className="mb-3">Konto zostało aktywowane</h1>
        <h5>Możesz teraz zalogować się do aplikacji</h5>
        <BlueButton
          className="mt-4 px-5 py-2"
          onClick={verify_account}
          type="button"
        >
          zaloguj się
        </BlueButton>
      </LoginBox>
    </div>
  );
};

export default connect(null, { verify })(ActivateAccount);
