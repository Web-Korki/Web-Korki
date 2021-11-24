import styled from 'styled-components';

const Date = styled.input`
  width: 100%;
  height: max(2em, 3.6rem);
  background: #ffffff;
  border: 1px solid #ebeff1;
  box-shadow: 0 0 5px rgba(55, 55, 55, 0.09);
  border-radius: 10px;
  text-align: center;
  color: #195669;
  font-size: clamp(1.4rem, 2.5vw, 2.2rem);

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

  @media (min-width: 1200px) {
    width: clamp(17rem, 35vw, 30rem);
  }
`;

export default Date;
