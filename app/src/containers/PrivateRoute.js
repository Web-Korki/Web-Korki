import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import LoginForm from './forms/LoginForm';
// import Loader from 'react-loader-spinner';

const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      if (!isAuthenticated) {
        // return <Redirect to='/login_form' />;
        return <LoginForm />;
      } else if (isAuthenticated) {
        return <Component {...props} />;
      }
      // if (auth.isLoading) {
      // 	return <Loader type='Grid' color='#00BFFF' height={80} width={80} />;
      // }
    }}
  />
);

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(PrivateRoute);
