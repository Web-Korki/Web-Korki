import styled from 'styled-components';

const Box = styled.button`
  padding: 1em 2.25em;
  box-sizing: border-box;
  width: 100%;
  font-size: clamp(2rem, 4vw, 3.8rem);
  background: #fbfcfd;
  border: 2px solid #ebf3f8;
  box-shadow: 4px 4px 15px 4px rgba(7, 93, 172, 0.1);
  border-radius: 10px;
  color: #427e90;

  @media (hover: hover) {
    &:hover {
      box-shadow: 4px 4px 15px 4px rgba(7, 93, 172, 0.25);
    }
  }

  @media screen and (max-width: 768px) {
    padding: 2.1rem auto;
  }
`;
export default Box;
