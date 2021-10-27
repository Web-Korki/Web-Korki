import styled from 'styled-components';

const Select = styled.select`
  width: clamp(173px, 250px, 309px);
  height: clamp(40px, 2.6vw, 50px);
  background-color: #fff;
  border: 1px solid #ebeff1;
  box-shadow: 1px 1px 5px rgba(55, 55, 55, 0.09);
  border-radius: 10px;
  text-align: center;

  &:focus {
    outline: none;
    box-shadow: 1px 1px 5px rgba(55, 55, 55, 0.3);
  }

  @media (max-width: 992px) {
    width: 80vw;
  }

  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
  }
`;

export default Select;
