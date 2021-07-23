import styled from 'styled-components';

// scaling: https://css-tricks.com/scaled-proportional-blocks-with-css-and-javascript/

const StyledBook = styled.div`
	background-color: transparent;
	width: 500px;
	height: 350px;
	position: relative;
	margin-bottom: 30px;

	.page {
		position: absolute;
	}

	.page-left-top {
		width: 250px;
		height: 50px;
		top: 0;
		left: 0;
		background-color: #fbfcfd;
		border-top-left-radius: 50%;
		border-top-right-radius: 50%;
		border-right: 1px solid #c2b280;
		border-left: 1px solid #c2b280;
	}
	.scrap {
		width: 0;
		height: 0;
	}
	.scrap-1 {
		top: 22.5px;
		border-top: 20px solid transparent;
		border-bottom: 20px solid transparent;
		border-left: 20px solid black;
		border-right: 20px solid transparent;
	}
	.scrap-2 {
		top: -10px;
		border-top: 15px solid transparent;
		border-bottom: 25px solid transparent;
		border-left: 30px solid black;
		border-right: 10px solid transparent;
	}
	.scrap-3 {
		top: 10px;
		border-top: 15px solid transparent;
		border-bottom: 5px solid transparent;
		border-left: 30px solid black;
		border-right: 10px solid transparent;
	}
	.scrap-4 {
		top: 20px;
		border-top: 25px solid transparent;
		border-bottom: 5px solid transparent;
		border-left: 20px solid black;
		border-right: 10px solid transparent;
	}
	.scrap-5 {
		top: 40px;
		border-top: 25px solid transparent;
		border-bottom: 5px solid transparent;
		border-left: 20px solid black;
		border-right: 10px solid transparent;
	}
	.scrap-6 {
		top: 60px;
		border-top: 25px solid transparent;
		border-bottom: 54px solid transparent;
		border-left: 15px solid black;
		border-right: 5px solid transparent;
	}
	.scrap-7 {
		top: 70px;
		border-top: 30px solid transparent;
		border-bottom: 25px solid transparent;
		border-left: 15px solid black;
		border-right: 5px solid transparent;
	}
	.scrap-8 {
		top: 100px;
		border-top: 25px solid transparent;
		border-bottom: 25px solid transparent;
		border-left: 30px solid black;
		border-right: 25px solid transparent;
	}
	.scrap-9 {
		top: 130px;
		border-top: 15px solid transparent;
		border-bottom: 25px solid transparent;
		border-left: 20px solid black;
		border-right: 15px solid transparent;
	}
	.scrap-10 {
		top: 150px;
		border-top: 5px solid transparent;
		border-bottom: 15px solid transparent;
		border-left: 30px solid black;
		border-right: 25px solid transparent;
	}
	.scrap-11 {
		top: 165px;
		border-top: 5px solid transparent;
		border-bottom: 25px solid transparent;
		border-left: 10px solid black;
		border-right: 25px solid transparent;
	}
	.scrap-12 {
		top: 170px;
		border-top: 5px solid transparent;
		border-bottom: 12px solid transparent;
		border-left: 12px solid black;
		border-right: 12px solid transparent;
	}
	.scrap-13 {
		top: 190px;
		border-top: 5px solid transparent;
		border-bottom: 25px solid transparent;
		border-left: 10px solid black;
		border-right: 15px solid transparent;
	}
	.scrap-14 {
		top: 210px;
		border-top: 2px solid transparent;
		border-bottom: 35px solid transparent;
		border-left: 10px solid black;
		border-right: 15px solid transparent;
	}
	.scrap-15 {
		top: 230px;
		border-top: 2px solid transparent;
		border-bottom: 35px solid transparent;
		border-left: 20px solid black;
		border-right: 15px solid transparent;
	}
	.scrap-16 {
		top: 250px;
		border-top: 25px solid transparent;
		border-bottom: 25px solid transparent;
		border-left: 20px solid black;
		border-right: 15px solid transparent;
	}

	.page-left-middle {
		width: 250px;
		height: 300px;
		background-color: #fbfcfd;
		left: 0;
		top: 50px;
		border-right: 1px solid #c2b280;
		border-left: 1px solid #c2b280;
	}

	.page-left {
		width: 250px;
		left: 0;
		bottom: 0;
		border-top-left-radius: 50%;
		border-top-right-radius: 50%;
		border-right: 1px solid #c2b280;
		border-left: 1px solid #c2b280;
	}

	.page-left-bottom {
		height: 25px;
		background-color: #fbfcfd;
	}
	.page-left-bottom-two {
		height: 22.5px;
		background-color: gray;
	}
	.page-left-bottom-three {
		height: 20px;
		background-color: #fbfcfd;
	}
	.page-left-bottom-four {
		height: 17.5px;
		background-color: gray;
	}
	.page-left-bottom-five {
		height: 15px;
		background-color: #fbfcfd;
	}
	.page-left-bottom-six {
		height: 12.5px;
		background-color: gray;
	}
	.page-left-bottom-seven {
		height: 10px;
		background-color: #fbfcfd;
	}
	.page-left-bottom-eight {
		height: 7.5px;
		background-color: gray;
	}
	.page-left-bottom-nine {
		height: 5px;
		background-color: #fbfcfd;
	}
	.page-left-bottom-ten {
		height: 2.5px;
		background-color: gray;
	}

	.page-right-top {
		width: 250px;
		height: 50px;
		top: 0;
		right: 0;
		background-color: #fbfcfd;
		border-top-left-radius: 50%;
		border-top-right-radius: 50%;
		border-right: 1px solid #c2b280;
		border-left: 1px solid #c2b280;
	}
	.page-right-middle {
		width: 250px;
		height: 300px;
		background-color: #fbfcfd;
		right: 0;
		top: 50px;
		border-right: 1px solid #c2b280;
		border-left: 1px solid #c2b280;
	}
	.page-right {
		width: 250px;
		right: 0;
		bottom: 0;
		border-top-left-radius: 50%;
		border-top-right-radius: 50%;
		border-right: 1px solid #c2b280;
		border-left: 1px solid #c2b280;
	}

	.page-right-bottom {
		height: 25px;
		background-color: #fbfcfd;
	}
	.page-right-bottom-two {
		height: 22.5px;
		background-color: gray;
	}
	.page-right-bottom-three {
		height: 20px;
		background-color: #fbfcfd;
	}
	.page-right-bottom-four {
		height: 17.5px;
		background-color: gray;
	}
	.page-right-bottom-five {
		height: 15px;
		background-color: #fbfcfd;
	}
	.page-right-bottom-six {
		height: 12.5px;
		background-color: gray;
	}
	.page-right-bottom-seven {
		height: 10px;
		background-color: #fbfcfd;
	}
	.page-right-bottom-eight {
		height: 7.5px;
		background-color: gray;
	}
	.page-right-bottom-nine {
		height: 5px;
		background-color: #fbfcfd;
	}
	.page-right-bottom-ten {
		height: 2.5px;
		background-color: gray;
	}
`;

export default StyledBook;
