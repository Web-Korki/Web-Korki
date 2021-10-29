import styled from 'styled-components';

const Textarea = styled.textarea`
  width: 60vw;
  min-height: 2em;
  max-width: 80rem;
  font-size: clamp(1.4rem, 2vw, 2rem);
  color: #195669;
  text-decoration: none;
  border-radius: 1rem;
  border: 1px solid #ebeff1;
  box-shadow: 1px 1px 5px rgb(55, 55, 55, 0.09);

  @media screen and (max-width: 992px) {
    width: 80vw;
  }
`;

export default Textarea;
