import styled from "styled-components";

const StyledBox = styled.button`
  padding: 42px;
  box-sizing: border-box;
  width: 100%;
  min-height: 120px;
  font-size: clamp(24px, 5vw, 36px);
  line-height: 51px;
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
export default StyledBox;
