//react
import React from 'react';
//redux
import { connect } from 'react-redux';
//router
import { Route, Redirect } from 'react-router-dom';
//utils
import Loader from 'react-loader-spinner';
//proptypes
import PropTypes from 'prop-types';
import LoginForm from './forms/LoginForm/LoginForm';

const PrivateRoute = ({
  component: Component,
  isAuthenticated,
  isSuperuser,
  isLoading,
  ...rest
}) => {
  PrivateRoute.propTypes = {
    component: PropTypes.shape({
      Component: PropTypes.object,
      isAuthenticated: PropTypes.bool,
      isSuperuser: PropTypes.bool,
      isLoading: PropTypes.bool,
    }),
  };

  const adminTest = /^[/]admin.+/gm;

  return (
    <Route
      {...rest}
      render={(props) => {
        if (!isAuthenticated) {
          return <LoginForm />;
        } else if (isAuthenticated) {
          if (adminTest.test(props.match.path) && !isSuperuser) {
            return <Redirect to="/user_menu" />;
          } else {
            return <Component {...props} />;
          }
        }
        if (isLoading) {
          return <Loader type="Grid" color="#00BFFF" height={80} width={80} />;
        }
      }}
    />
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  isSuperuser: state.auth.isSuperuser,
  isLoading: state.auth.isLoading,
});

export default connect(mapStateToProps)(PrivateRoute);
