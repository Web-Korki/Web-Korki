import styled from 'styled-components';

const GreyButton = styled.button`
  font-size: clamp(1.4rem, 3vw, 2.4rem);
  padding: 0.25em 2.25em;
  border-radius: 3rem;
  background-color: #fbfcfd;
  border: 1px solid #ebeff1;
  box-sizing: border-box;
  box-shadow: 1px 1px 5px rgba(55, 55, 55, 0.1);
  color: #427e90;
  font-weight: 400;

  @media (hover: hover) {
    &:hover {
      box-shadow: 1px 1px 5px rgba(55, 55, 55, 0.4);
    }
  }
`;

export default GreyButton;
