import styled from 'styled-components';

const StyledGrayBtn = styled.button`
	min-width: 150px;
	background: #fbfcfd;
	border: 1px solid #ebeff1;
	box-sizing: border-box;
	box-shadow: 1px 1px 5px rgba(55, 55, 55, 0.09);
	border-radius: 28px;
	color: #427e90;

	&:hover {
		/* background: #ebeff1; */
		box-shadow: 1px 1px 5px rgba(55, 55, 55, 0.5);
		/* border: 1px solid #427e91; */
		outline: none;
	}
`;

export default StyledGrayBtn;
