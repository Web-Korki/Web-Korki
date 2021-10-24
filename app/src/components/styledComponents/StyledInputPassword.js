import styled from 'styled-components';

const StyledInputPassword = styled.input`
  width: clamp(173px, 300px, 309px);
  height: clamp(40px, 2.6vw, 50px);
  background: #ffffff;
  color: #427e90;
  border: 1px solid #ebeff1;
  box-shadow: 1px 1px 5px rgba(55, 55, 55, 0.09);
  border-radius: 10px;
  text-align: center;
  font-size: clamp(18px, 2.5vw, 25px);

  &::placeholder {
    color: #eeeeee;
  }

  &:-ms-input-placeholder {
    color: #eeeeee;
  }

  &::-ms-input-placeholder {
    color: #eeeeee;
  }

  &:focus {
    outline: none;
    box-shadow: 1px 1px 5px rgba(55, 55, 55, 0.3);
  }

  &::-webkit-calendar-picker-indicator {
    display: none;
  }

  @media screen and (max-width: 768px) {
    width: 240px;
    height: 40px;
  }
`;

export default StyledInputPassword;
