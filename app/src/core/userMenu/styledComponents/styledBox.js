import styled from 'styled-components';

const StyledBox = styled.button`
  padding: 42px;
  box-sizing: border-box;
  min-width: 300px;
  min-height: 120px;
  font-size: 30px;
  line-height: 51px;
  margin: 10px;
  background: #fbfcfd;
  border: 2px solid #ebf3f8;
  box-shadow: 4px 4px 15px 4px rgba(7, 93, 172, 0.12);
  border-radius: 10px;
  color: #195669;

  &:hover {
    background: #ebeff1;
  }
`;
export default StyledBox;
