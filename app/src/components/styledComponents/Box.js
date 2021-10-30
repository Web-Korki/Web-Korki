import styled from "styled-components";

const Box = styled.button`
  padding: 1em 2em;
  box-sizing: border-box;
  width: 100%;
  font-size: clamp(2rem, 4vw, 3.4rem);
  background: #fbfcfd;
  border: 2px solid #ebf3f8;
  box-shadow: 0 0 15px 4px rgba(7, 93, 172, 0.1);
  border-radius: 1rem;
  color: #427e90;

  @media (hover: hover) {
    &:hover {
      box-shadow: 0 0 15px 4px rgba(7, 93, 172, 0.25);
    }
  }

  @media screen and (max-width: 992px - 1px) {
    padding: 2.1rem auto;
  }
`;
export default Box;
