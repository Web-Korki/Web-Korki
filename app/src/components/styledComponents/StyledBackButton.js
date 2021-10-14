import styled from 'styled-components';

const StyledBackButton = styled.button`
  width: 50px;
  height: 50px;
  background: #fbfcfd;
  border: 2px solid #ebf3f8;
  box-shadow: 1px 1px 5px 1px rgba(7, 93, 172, 0.12);
  border-radius: 50%;
  position: relative;

  svg{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%,-50%);
    -ms-transform: translate(-50%,-50%);
  }

  &:hover{
    box-shadow: 1px 1px 5px 1px #37373717;
    background-color: #DFF2FB;
    border: 1px solid #DFF2FB;
  }
`;
export default StyledBackButton;
