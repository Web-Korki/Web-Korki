import styled from 'styled-components';

const StyledBox = styled.button`
  padding: 42px;
  box-sizing: border-box;
  width: 100%;
  font-size: clamp(24px, 5vw, 36px);
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
    padding: 21px;
  }

  select {
    appearance: none;
  }

  &::after {
    content: url('app\src\assets\selectBlueArrow\Vector 1.png');
    position: absolute;
    right: 0;
    top: 0;
  }
`;
export default StyledBox;
