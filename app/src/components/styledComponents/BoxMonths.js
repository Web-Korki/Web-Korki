import styled from 'styled-components';

const BoxMonths = styled.button`
  box-sizing: border-box;
  width: clamp(100%, 40vw, 24rem);
  height: min(12rem, 15vw);
  font-size: clamp(1.4rem, 2vw, 2.4rem);
  color: #195669;
  line-height: 29px;
  background: #fbfcfd;
  border: 2px solid #ebf3f8;
  box-shadow: 4px 4px 15px 4px rgba(7, 93, 172, 0.1);
  border-radius: 1rem;
  color: #195669;

  @media (hover: hover) {
    &:hover {
      box-shadow: 4px 4px 15px 4px rgba(7, 93, 172, 0.25);
    }
  }
`;
export default BoxMonths;
