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
  const [show, setShow] = useState(false);

  setTimeout(() => {
    setShow(true);
  }, 2000);

  return !cookie && show ? (
    <CookieOverlay>
      <CookieContainer>
        <div className="row mb-4">
          <CookieIcon />
          <h1 className="col align-self-center title">
            Stosujemy politykę Cookies
          </h1>
        </div>
        <div className="row">
          <p className="text col col-lg-10 px-5 px-lg-0 mx-auto mb-4">
            [Miejsce na tekst o ciasteczkach itd. Jak ma być polityka
            prywatności, to daj znać]. Ciasteczko aktualnie wygasa po 14 dniach
            (chyba, że jakiś ad-blocker usunie go wcześniej/po zakończeniu
            sesji)
          </p>
        </div>
        <div className="row">
          <BlueButton
            className="col-auto me-auto me-lg-0 ms-auto"
            onClick={() =>
              setCookie(
                Cookies.set('wk_consent', true, { expires: 14, path: '/' })
              )
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
