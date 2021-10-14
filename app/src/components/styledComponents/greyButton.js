import styled from "styled-components";

const StyledGreyButton = styled.button`
  min-width: 150px;
  background: #fbfcfd;
  border: 1px solid #ebeff1;
  box-sizing: border-box;
  box-shadow: 1px 1px 5px rgba(55, 55, 55, 0.1);
  border-radius: 28px;
  color: #427e90;

  @media (hover: hover) {
    &:hover {
      box-shadow: 1px 1px 5px rgba(55, 55, 55, 0.4);
    }
  }
`;

export default StyledGreyButton;
