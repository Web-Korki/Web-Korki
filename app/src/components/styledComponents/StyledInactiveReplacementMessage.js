import styled from 'styled-components';

const StyledInactiveReplacementMessage = styled.button`
	width: 100%;
	height: 200px;
	background-color: #fbfcfd;
	border: none;
	border-radius: 10px;
	box-shadow: 2px 2px 5px 2px #cce4f4;
	padding: 20px;
	margin-top: 50px;
	color: #195669;

	@media (hover: hover) {
		&:hover {
			background-color: #ebeff1;
		}
	}

	@media (max-width: 414px) {
		.inactiveReplacementWrapper {
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
		}

		width: 334px;
		height: 135px;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -20%);
	}
`;
export default StyledInactiveReplacementMessage