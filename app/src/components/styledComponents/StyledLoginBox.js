import styled from 'styled-components';

const StyledLoginBox = styled.div`
  padding: 50px 130px;
  box-shadow: 4px 4px 15px 4px rgba(7, 93, 172, 0.12);
  border: 2px solid #ebf3f8;
  background: #fbfcfd;
  border-radius: 10px;
  color: #427e90;

  @media (max-width: 768px) {
    width: 95vw;
    padding: 40px 0;
  }
`;

export default StyledLoginBox;
