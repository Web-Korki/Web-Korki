import styled from "styled-components";

const StyledBoxMonths = styled.button`
  box-sizing: border-box;
  width: clamp(100%, 40vw, 240px);
  height: min(120px, 15vw);
  font-size: clamp(15px, 24px, 4vw);
  line-height: 29px;
  background: #fbfcfd;
  border: 2px solid #ebf3f8;
  box-shadow: 4px 4px 15px 4px rgba(7, 93, 172, 0.1);
  border-radius: 10px;
  color: #195669;

  @media (hover: hover) {
    &:hover {
      box-shadow: 4px 4px 15px 4px rgba(7, 93, 172, 0.25);
    }
  }
`;
export default StyledBoxMonths;
