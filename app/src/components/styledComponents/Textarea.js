import styled from 'styled-components';

const Textarea = styled.textarea`
  width: 60vw;
  max-width: 800px;
  border-radius: 10px;
  border: 1px solid #ebeff1;
  box-shadow: 1px 1px 5px rgb(55, 55, 55, 0.09);

  @media screen and (max-width: 992px) {
    width: 80vw;
  }
`;

export default Textarea;
