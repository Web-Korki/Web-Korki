import React, { useState } from "react";
import { Wrapper, BlueButton } from '../components/styledComponents/index';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { verify } from '../redux/actions/auth';

const ActivateAccount = ({ verify, match }) => {
  const [verified, setVerified] = useState(false);

  //page matcher regex:
  //const activateAccountPage = /^http[s]?:\/\/web\-korki\.edu\.pl\/activate\/[a-zA-Z]{3,}\/[\w|\W]{3,}/gm

  const verify_account = (e) => {
    const uid = match.params.uid; //działa dobrze?
    const token = match.params.token; //dzioła źle?

    verify(uid, token);
    setVerified(true);
  };

  if (verified) {
    return <Redirect to="/user_menu" />;
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

export default connect(null, { verify })(ActivateAccount);
