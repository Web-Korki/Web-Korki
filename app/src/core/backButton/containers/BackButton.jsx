import { StyledBackButton } from '../styledComponents/index';
import { useHistory } from 'react-router-dom';

export const BackButton = () => {
  let history = useHistory();
  const goToPreviousPath = () => {
    history.goBack();
  };
  return (
    <div className="col-auto p-0 d-flex justify-content-center align-items-center">
      <StyledBackButton
        onClick={goToPreviousPath}
        className="justify-content-center align-items-center"
      >
        <svg
          width="9"
          height="14"
          viewBox="0 0 9 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8 1L2 7L8 13"
            stroke="#195669"
            stroke-width="2"
            stroke-linecap="round"
          />
        </svg>
      </StyledBackButton>
    </div>
  );
};
