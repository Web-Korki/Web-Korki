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


import axios from 'axios';
import { 
	LOGIN_SUCCESS,
	LOGIN_FAIL,
	USER_LOADED_SUCCESS,
	USER_LOADED_FAIL 
} from './types';

const API_URL = 'https://web-korki.edu.pl';

export const load_user = () => async dispatch => {
	if(localStorage.getItem('access')){
		const config = {
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${localStorage.getItem('access')}`,
				'Accept': 'application/json'
			}
		};

		try {
			const res = await axios.get(`${API_URL}/auth/users/me/`, config);
	
			dispatch({
				type: USER_LOADED_SUCCESS,
				payload: res.data
			})
		} catch (err) {
			dispatch({
				type: USER_LOADED_FAIL
			})
		}
	} else {
		dispatch({
			type: USER_LOADED_FAIL
		})
	}
}

export const login = (username, password) => async dispatch => {
	const config = {
		headers: {
			'Content-Type': 'application/json'
		}
	};

	const body = JSON.stringify({username, password});

	try {
		const res = await axios.post(`${API_URL}/auth/jwt/create/`, body, config);

		dispatch({
			type: LOGIN_SUCCESS,
			payload: res.data
		});

		dispatch(load_user());
		
	} catch (err) {
		dispatch({
			type: LOGIN_FAIL
		})
	}
}