import styled from 'styled-components';

const StyledBackButton = styled.button`
   width: 50px;
   height: 50px;
   background: #fbfcfd;
   border: 2px solid #ebf3f8;
   box-shadow: 4px 4px 15px 4px rgba(7, 93, 172, 0.12);
   border-radius: 50%;

   &:hover {
      background-color: #dff2fb;
      border: 2px solid #ebf3f8;
      box-shadow: 2px 2px 15px 4px rgba(7, 93, 172, 0.09);
   }
`;
export default StyledBackButton;
