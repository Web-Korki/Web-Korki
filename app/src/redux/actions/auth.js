// import axios from 'axios';
// import { LOGIN_FAIL, USER_LOADED, USER_LOADING } from './types';

// const baseURL = 'http://nujgoiz.cluster024.hosting.ovh.net';
// // CHECK TOKEN & LOAD USER:
// export const loadUser = () => (dispatch, getState) => {
// 	//User loading:
// 	dispatch({
// 		type: USER_LOADING,
// 	});

// 	//Get token from state:
// 	const token = getState().auth.token;

// 	//Headers
// 	const config = {
// 		headers: {
// 			'Content-Type': 'application/json',
// 		},
// 	};

// 	//If token, add to headers config
// 	if (token) {
// 		config.headers['Authorization'] = `Token ${token}`;
// 	}

// 	axios
// 		.get(`${baseURL}/api/auth/user`, config)
// 		.then((res) => {
// 			dispatch({
// 				type: USER_LOADED,
// 				payload: res.data,
// 			});
// 		})
// 		.catch((err) => {
// 			console.log(err.response.data, err.response.status);
// 			dispatch({
// 				type: LOGIN_FAIL,
// 			});
// 		});
// };
