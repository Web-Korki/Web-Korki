import styled from 'styled-components';

const Wrapper = styled.div`
  width: 95vw;
  padding: 2.5em 2em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 8px 2px rgba(7, 93, 172, 0.12);
  border: 2px solid #ebf3f8;
  background-color: #fbfcfd;
  border-radius: 1rem;

  @media (min-width: 768px) {
    box-shadow: 0 0 15px 4px rgba(7, 93, 172, 0.12);
    padding: 3em 5em;
    width: auto;
  }
`;

export default Wrapper;
