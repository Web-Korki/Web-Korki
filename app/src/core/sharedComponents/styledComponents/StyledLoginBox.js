import styled from 'styled-components';

const StyledLoginBox = styled.div`
	width: 752px;
	height: 448px;
	box-shadow: 4px 4px 15px 4px rgba(7, 93, 172, 0.12);
	border: 2px solid #ebf3f8;
	background: #fbfcfd;
	border-radius: 10px;
	color: #427e90;

	@media (max-width: 767px) {
		width: 95vw;
		height: 50vh;
		padding-bottom: 20px;

		h1 {
			margin-top: 20px;
			text-align: center;
			width: 200px;
		}
	}
`;

export default StyledLoginBox;
