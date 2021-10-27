import { Select } from '../styledComponents/index';

const SelectIcon = () => {
  return (
    <div className="d-flex justify-content-center align-items center">
      <Select className="justify-content-center align-items-center">
        <svg
          width="19"
          height="11"
          viewBox="0 0 19 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 1L9.5 9.5L18 1"
            stroke="#195669"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </Select>
    </div>
  );
};

export default SelectIcon;
