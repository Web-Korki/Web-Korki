import styled from "styled-components";

const Textarea = styled.textarea`
  width: 95rem;
  min-height: 2em;
  font-size: clamp(1.4rem, 2.5vw, 2rem);
  color: #195669;
  text-decoration: none;
  border-radius: 1rem;
  border: 1px solid #ebeff1;
  box-shadow: 0 0 5px rgb(55, 55, 55, 0.1);

  @media screen and (max-width: 1200px - 1px) {
    min-height: 3.2em;
    width: 80vw;
  }
`;

export default Textarea;
