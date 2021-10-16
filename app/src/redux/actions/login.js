import axios from 'axios';
import { TRY_LOGIN } from 'ReduxActions/types';

//TRY LOGIN
export const tryLogin = () => (dispatch) => {
  await axios.post(
    'http://nujgoiz.cluster024.hosting.ovh.net/api/auth/login/',
    {},
    {
      auth: {
        username: 'email',
        password: 'password',
      },
    }
  );
};
