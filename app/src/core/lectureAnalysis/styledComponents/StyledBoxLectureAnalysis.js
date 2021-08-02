import styled from 'styled-components';

const StyledBoxLectureAnalysis = styled.button`
	/* padding: 40px; */
	box-sizing: border-box;
	min-width: 240px;
	min-height: 120px;
	font-size: clamp(15px, 24px, 4vw);
	line-height: 29px;
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

	@media (max-width: 991px) {
		min-width: 45vw;
		align-content: center;
		justify-content: center;
	}

	@media (max-width: 576px) {
		width: 168px;
		height: 50px;
	}
`;

export default StyledBoxLectureAnalysis;
