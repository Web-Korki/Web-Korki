import styled from "styled-components";

const Wrapper = styled.div`
  padding: 3em 5em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 15px 4px rgba(7, 93, 172, 0.12);
  border: 2px solid #ebf3f8;
  background-color: #fbfcfd;
  border-radius: 1rem;

  @media (max-width: 768px) {
    box-shadow: 0 0 8px 2px rgba(7, 93, 172, 0.12);
    width: 95vw;
  }
`;

export default Wrapper;
