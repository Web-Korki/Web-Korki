import { Select } from '../styledComponents/index';

export const SelectField = (props) => {
  return (
    <div className="position-relative align-self-center">
      <Select>
        <option value="0">--Wybierz opcję--</option>
        {props.options.map((e) => (
          <option value={e.value}>{e.name}</option>
        ))}
      </Select>
      <svg
        className="d-arrow"
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
    </div>
  );
};
