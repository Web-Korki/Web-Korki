import styled from 'styled-components';

const GoBack = styled.button`
  background-color: #fbfcfd;
  border-radius: 50px;
  border: none;
  color: #427e90;
  box-shadow: 4px 4px 15px 4px rgba(7, 93, 172, 0.12);
  width: 309px;
  height: 50px;
  font-size: clamp(20px, 2.5vw, 25px);

  &:hover {
    background-color: #f2f2f2;
  }
`;
export default GoBack;
