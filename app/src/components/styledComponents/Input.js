import styled from 'styled-components';

const Input = styled.input`
  width: clamp(20rem, 35vw, 30rem);
  height: clamp(3.2rem, 5vw, 5rem);
  font-size: clamp(1.8rem, 2.5vw, 2.4rem);
  background: #ffffff;
  color: #427e90;
  border: 1px solid #ebeff1;
  box-shadow: 0 0 5px rgba(55, 55, 55, 0.09);
  border-radius: 10px;
  text-align: center;

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
    box-shadow: 0 0 5px rgba(55, 55, 55, 0.3);
  }

  &::-webkit-calendar-picker-indicator {
    display: none;
  }
`;

export default Input;
