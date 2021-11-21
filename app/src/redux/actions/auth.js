import axios from 'axios';
import Cookies from 'js-cookie';
import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  ACTIVATION_SUCCESS,
  ACTIVATION_FAIL,
  USER_LOADED_SUCCESS,
  USER_LOADED_FAIL,
  AUTHENTICATED_FAIL,
  AUTHENTICATED_SUCCESS,
  TOKEN_REFRESH_SUCCESS,
  TOKEN_REFRESH_FAIL,
  LOGOUT,
  PASSWORD_RESET_SUCCESS,
  PASSWORD_RESET_FAIL,
  PASSWORD_RESET_CONFIRM_SUCCESS,
  PASSWORD_RESET_CONFIRM_FAIL,
  CHANGE_DEFAULT_PASSWORD_SUCCESS,
  CHANGE_DEFAULT_PASSWORD_FAIL,
  GET_ERRORS,
  RESET_STATE,
} from './types';

const API_URL = 'https://web-korki.edu.pl';
// const API_URL = 'http://127.0.0.1:8000';

export const refresh_token = () => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const body = JSON.stringify({
    refresh: Cookies.get('refresh'),
  });

  try {
    const response = await axios.post(
      `${API_URL}/auth/jwt/refresh/`,
      body,
      config
    );

    dispatch({
      type: TOKEN_REFRESH_SUCCESS,
      payload: response.data,
    });
    dispatch(checkAuthenticated());
    dispatch(load_user());
  } catch (err) {
    dispatch({
      type: TOKEN_REFRESH_FAIL,
    });
    const errors = {
      msg: err.response.data.detail,
      status: err.response.status,
    };
    dispatch({
      type: GET_ERRORS,
      payload: errors,
    });
  }
};

export const checkAuthenticated = () => async (dispatch) => {
  if (Cookies.get('access')) {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    };
    const body = JSON.stringify({ token: Cookies.get('access') });

    try {
      const res = await axios.post(`${API_URL}/auth/jwt/verify/`, body, config);

      if (res.data.code !== 'token_not_valid') {
        dispatch({
          type: AUTHENTICATED_SUCCESS,
        });
      } else {
        dispatch({
          type: AUTHENTICATED_FAIL,
        });
      }
    } catch (err) {
      dispatch({
        type: AUTHENTICATED_FAIL,
      });
      dispatch(refresh_token());
    }
  } else {
    dispatch({
      type: AUTHENTICATED_FAIL,
    });
  }
};

export const load_user = () => async (dispatch) => {
  if (Cookies.get('access')) {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${Cookies.get('access')}`,
        Accept: 'application/json',
      },
    };

    try {
      const res = await axios.get(`${API_URL}/auth/users/me/`, config);
      dispatch({
        type: USER_LOADED_SUCCESS,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: USER_LOADED_FAIL,
      });
    }
  } else {
    dispatch({
      type: USER_LOADED_FAIL,
    });
  }
};

export const login = (username, password) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const body = JSON.stringify({ username, password });

  try {
    const res = await axios.post(`${API_URL}/auth/jwt/create/`, body, config);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });

    dispatch(load_user());
  } catch (err) {
    dispatch({
      type: LOGIN_FAIL,
    });
    const errors = {
      msg: err.response.data.detail,
      status: err.response.status,
    };
    dispatch({
      type: GET_ERRORS,
      payload: errors,
    });
  }
};

export const register = (username, email) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const body = JSON.stringify({ username, email });

  try {
    const res = await axios.post(`${API_URL}/auth/users/`, body, config);

    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: REGISTER_FAIL,
    });
    const errors = {
      msg: err.response.data.detail,
      email: err.response.data.email[0],
      status: err.response.status,
    };
    dispatch({
      type: GET_ERRORS,
      payload: errors,
    });
  }
};

export const verify = (uid, token) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const body = JSON.stringify({ uid, token });

  try {
    const res = await axios.post(
      `${API_URL}/auth/users/activation/`,
      body,
      config
    );

    dispatch({
      type: ACTIVATION_SUCCESS,
    });
  } catch (err) {
    dispatch({
      type: ACTIVATION_FAIL,
    });
    const errors = {
      msg: err.response.data.detail,
      status: err.response.status,
    };
    dispatch({
      type: GET_ERRORS,
      payload: errors,
    });
  }
};

export const reset_password = (email) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const body = JSON.stringify({ email });

  try {
    await axios.post(`${API_URL}/auth/users/reset_password/`, body, config);

    dispatch({
      type: PASSWORD_RESET_SUCCESS,
    });
  } catch (err) {
    dispatch({
      type: PASSWORD_RESET_FAIL,
    });
    const errors = {
      msg: err.response.data.detail,
      status: err.response.status,
    };
    dispatch({
      type: GET_ERRORS,
      payload: errors,
    });
  }
};

export const reset_password_confirm =
  (uid, token, new_password, re_new_password) => async (dispatch) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const body = JSON.stringify({
      uid,
      token,
      new_password,
      re_new_password,
    });

    try {
      await axios.post(
        `${API_URL}/auth/users/reset_password_confirm/`,
        body,
        config
      );

      dispatch({
        type: PASSWORD_RESET_CONFIRM_SUCCESS,
      });
    } catch (err) {
      dispatch({
        type: PASSWORD_RESET_CONFIRM_FAIL,
      });
      const errors = {
        msg: err.response.data.detail,
        status: err.response.status,
      };
      dispatch({
        type: GET_ERRORS,
        payload: errors,
      });
    }
  };

export const change_default_password =
  (id, fb_name, old_password, new_password) => async (dispatch) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${Cookies.get('access')}`,
        Accept: 'application/json',
      },
    };

    const body = JSON.stringify({
      fb_name,
      old_password,
      new_password, //TO DO: czy backend przyjmie takie same hasła?
    });

    try {
      await axios.patch(
        `${API_URL}/api/change_default_password/${id}`,
        body,
        config
      );
      dispatch({
        type: CHANGE_DEFAULT_PASSWORD_SUCCESS,
      });
    } catch (err) {
      const errors = {
        msg: err.response.data.detail,
        status: err.response.status,
      };
      dispatch({
        type: CHANGE_DEFAULT_PASSWORD_FAIL,
      });
      dispatch({
        type: GET_ERRORS,
        payload: errors,
      });
    }
  };
  export const change_default_password_validation_error =
    (validation_error) => async (dispatch) => {
      dispatch({
        type: GET_ERRORS,
        payload: {
          msg: validation_error,
        },
      });
    };

export const logout = () => (dispatch) => {
	dispatch({
		type: LOGOUT,
	});
};

export const reset_state = () => dispatch => {
	dispatch({
		type: RESET_STATE,
	})
}