import styled from 'styled-components';

const Select = styled.select`
  appearance: none;
  padding-left: 0.5em;
  width: clamp(17rem, 35vw, 30rem);
  height: clamp(4rem, 3.3vw, 5rem);
  background-color: #fff;
  border: 1px solid #ebeff1;
  color: #195669;
  font-size: clamp(1.4rem, 2.5vw, 2rem);
  box-shadow: 0 0 5px rgba(55, 55, 55, 0.09);
  border-radius: 1rem;

  @media (max-width: 1199px) {
    width: 80vw;
  }
`;

export default Select;
