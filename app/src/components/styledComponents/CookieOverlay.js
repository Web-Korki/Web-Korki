import styled from 'styled-components';

const CookieOverlay = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.3s ease-in-out;
  background-color: rgba(0, 0, 0, 0.3);
`;

export default CookieOverlay;
