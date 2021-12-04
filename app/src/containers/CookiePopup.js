import Cookies from 'js-cookie';
import CookieOverlay from '../components/styledComponents/CookieOverlay';
import { BlueButton, CookieContainer } from '../components/styledComponents';
import { CookieIcon } from '../components/layout/CookieIcon';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { check_cookies } from '../redux/actions/cookies';

const CookiePopup = ({ isCookie }) => {
  CookiePopup.propTypes = {
    isCookie: PropTypes.bool,
  };

  const setCookies = () => {
    Cookies.set('w-k_consent', true);
  };

  const [cookie, setCookie] = useState(false);

  if (!isCookie) {
    return (
      <CookieOverlay>
        <CookieContainer>
          <div className="row mb-4">
            <CookieIcon />
            <h1 className="col align-self-center title">
              Stosujemy politykę Cookies
            </h1>
          </div>
          <div className="row">
            <p className="text col col-lg-8 px-5 px-lg-0 mx-auto mb-4">
              Ta strona korzysta z ciasteczek czy tego chcesz czy nie. Ta strona
              korzysta z ciasteczek czy tego chcesz czy nie.
            </p>
          </div>
          <div className="row">
            <BlueButton
              className="col-auto me-auto me-lg-0 ms-auto"
              onClick={() => setCookies()}
            >
              rozumiem
            </BlueButton>
          </div>
        </CookieContainer>
      </CookieOverlay>
    );
  }
  return null;
};

const mapStateToProps = (state) => ({
  isCookie: state.cookies.isCookie,
});

export default connect(mapStateToProps)(CookiePopup);
