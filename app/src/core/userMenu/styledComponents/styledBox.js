import styled from 'styled-components';

const StyledBox = styled.button`
	padding: 42px;
	box-sizing: border-box;
	min-width: 300px;
	min-height: 120px;
	font-size: 30px;
	line-height: 51px;
	margin: 10px;
	background: #fbfcfd;
	border: 2px solid #ebf3f8;
	box-shadow: 4px 4px 15px 4px rgba(7, 93, 172, 0.12);
	border-radius: 10px;
	color: #195669;

	@media (hover: hover) {
		&:hover {
			background: #ebeff1;
		}
	}

	@media (max-width: 414px) {
		width: 330px;
	}
`;
export default StyledBox;
