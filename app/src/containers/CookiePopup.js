// import Cookies from 'js-cookie';
import {
  BlueButton,
  CookieContainer,
  CookieOverlay,
} from '../components/styledComponents';
import { CookieIcon } from '../components/layout/CookieIcon';
import Cookies from 'js-cookie';
import { useState } from 'react';

const CookiePopup = () => {
  const [cookie, setCookie] = useState(Cookies.get('wk_consent') ? true : null);

  return !cookie ? (
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
            onClick={() =>
              setCookie(Cookies.set('wk_consent', true, { path: '/' }))
            }
          >
            rozumiem
          </BlueButton>
        </div>
      </CookieContainer>
    </CookieOverlay>
  ) : null;
};

export default CookiePopup;
