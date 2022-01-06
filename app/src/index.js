//react
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

//css
import './reset.css';

//redux
import { Provider } from 'react-redux';
import store from './store';

//router
import { BrowserRouter as Router } from 'react-router-dom';

//alerts
import { Provider as AlertProvider } from 'react-alert';
// import AlertTemplate from 'react-alert-template-basic';
import AlertTemplate from './containers/alerts/AlertTemplate';
import Alerts from './containers/alerts/Alerts';

//components
import App from './App';

// utils
import axios from 'axios';
import Cookies from 'js-cookie';

//Alert Options:
const alertOptions = {
  timeout: 3000,
  position: 'top center',
};

// interceptor
const refreshToken = () => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const body = JSON.stringify({ refresh: Cookies.get('refresh') });

  return new Promise((resolve, reject) => {
    axios
      .post('https://web-korki.edu.pl/auth/jwt/refresh', body, config)
      .then((response) => {
        Cookies.set('access', response.data.access);
        Cookies.set('refresh', response.data.refresh);

        resolve(response.data.access);
      })
      .catch((error) => reject(error));
  });
};

axios.interceptors.response.use(
  (response) =>
    new Promise((resolve, reject) => {
      // return a successful response
      // console.log(response); //uncomment for debugging
      resolve(response);
    }),
  (error) => {
    // console.log("error occured", error.response.status) //uncomment for debugging
    // return any error which is due to authentication
    if (error.response.status !== 401) {
      return new Promise((resolve, reject) => {
        reject(error);
      });
    }

    // if error occured due to request to refresh token, return it and take the user to login_form
    if (
      error.config.url == 'https://web-korki.edu.pl/auth/jwt/refresh' ||
      error.config.url == 'https://web-korki.edu.pl/auth/jwt/create' ||
      error.config.url == 'https://web-korki.edu.pl/auth/users/me/'
    ) {
      localStorage.clear();
      window.location.pathname = '/login_form';

      return new Promise((resolve, reject) => {
        reject(error);
      });
    }

    // console.log(Cookies.get('access')); //uncomment for debugging
    // otherwise refresh token and repeat the original request
    if (Cookies.get('refresh')) {
      return refreshToken()
        .then((access) => {
          // console.log('new access token is ', Cookies.get('access')); //uncomment for debugging

          const config = error.config;
          config.headers['Authorization'] = `Bearer ${access}`;

          return new Promise((resolve, reject) => {
            axios
              .request(config)
              .then((response) => {
                resolve(response);
              })
              .catch((error) => {
                reject(error);
              });
          });
        })
        .catch((error) => {
          Promise.reject(error);
        });
    }

    return;
  }
);

class Index extends Component {
  render() {
    return (
      <React.StrictMode>
        <Provider store={store}>
          <AlertProvider template={AlertTemplate} {...alertOptions}>
            <Router>
              <Alerts />
              <App />
            </Router>
          </AlertProvider>
        </Provider>
      </React.StrictMode>
    );
  }
}

ReactDOM.render(<Index />, document.getElementById('root'));
