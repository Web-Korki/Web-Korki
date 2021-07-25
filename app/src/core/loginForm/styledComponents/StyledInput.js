import styled from 'styled-components';

const StyledInput = styled.input`
	width: 309px;
	height: 50px;
	background: #ffffff;
	border: 1px solid #ebeff1;
	box-shadow: 1px 1px 5px rgba(55, 55, 55, 0.09);
	border-radius: 10px;
	text-align: center;

	&::placeholder {
		color: #eeeeee;
	}

	&:-ms-input-placeholder {
		color: #eeeeee;
	}

	&::-ms-input-placeholder {
		color: #eeeeee;
	}
`;

export default StyledInput;
