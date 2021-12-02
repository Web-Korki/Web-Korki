import Cookies from 'js-cookie';
import CookieOverlay from '../components/styledComponents/CookieOverlay';
import { BlueButton, Wrapper } from '../components/styledComponents';
import { CookieIcon } from '../components/layout/CookieIcon';

const CookiePopup = () => {
  return (
    <CookieOverlay>
      <Wrapper>
        <div className="d-flex align-items-center justify-content-between mb-4">
          <CookieIcon />
          <h1 className="title">Stosujemy politykę Cookies</h1>
        </div>

        <p className="text mb-4 px-5">
          Ta strona korzysta z ciasteczek czy tego chcesz czy nie.
        </p>
        <BlueButton>rozumiem</BlueButton>
      </Wrapper>
    </CookieOverlay>
  );
};

export default CookiePopup;
