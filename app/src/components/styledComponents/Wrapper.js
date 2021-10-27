import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 5rem 13rem;
  box-shadow: 4px 4px 15px 4px rgba(7, 93, 172, 0.12);
  border: 2px solid #ebf3f8;
  background: #fbfcfd;
  border-radius: 10px;
  color: #427e90;

  @media (max-width: 768px) {
    width: 95vw;
    padding: 4rem 1rem;
  }
`;

export default Wrapper;
