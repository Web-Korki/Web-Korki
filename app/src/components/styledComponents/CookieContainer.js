import styled from 'styled-components';

const CookieContainer = styled.div`
  width: 95vw;
  padding: 1em 2em 2.5em;
  box-shadow: 0 0 8px 2px rgba(7, 93, 172, 0.12);
  border: 2px solid #ebf3f8;
  background-color: #fbfcfd;
  border-radius: 1rem;

  @media (min-width: 1200px) {
    box-shadow: 0 0 15px 4px rgba(7, 93, 172, 0.12);
    padding: 1.5em 5em 3em;
    width: 80vw;
  }
`;

export default CookieContainer;
