// import Cookies from 'js-cookie';
import { BlueButton, CookieContainer } from '../components/styledComponents';
import { CookieIcon } from '../components/layout/CookieIcon';
import Cookies from 'js-cookie';
import { useState } from 'react';
import { useTransition, animated } from 'react-spring';
import { unmountComponentAtNode } from 'react-dom';

const CookiePopup = () => {
  const [cookie, setCookie] = useState(
    Cookies.get('wk_consent') ? true : false
  );
  const [mount, setMount] = useState(false);

  setTimeout(() => {
    setMount(true);
  }, 1500);

  const transition = useTransition(!cookie && mount, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  const handleClick = () => {
    setCookie(
      Cookies.set('wk_consent', true, {
        expires: 14,
        path: '/',
      })
    );
    unmountComponentAtNode(document.getElementById('cookie-pop-up'));
  };

  return transition((style, item) =>
    item ? (
      <animated.div className="cookie-overlay" id="cookie-pop-up" style={style}>
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
              prywatności, to się doda]. Ciasteczko aktualnie wygasa po 14
              dniach (chyba, że jakiś ad-blocker usunie go wcześniej/po
              zakończeniu sesji)
            </p>
          </div>
          <div className="row">
            <BlueButton
              className="col-auto me-auto me-lg-0 ms-auto"
              onClick={handleClick}
            >
              rozumiem
            </BlueButton>
          </div>
        </CookieContainer>
      </animated.div>
    ) : null
  );
};

export default CookiePopup;
