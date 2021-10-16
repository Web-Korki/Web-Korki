import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import LoginForm from './forms/LoginForm';
import Loader from 'react-loader-spinner';

const PrivateRoute = ({
   component: Component,
   isAuthenticated,
   isLoading,
   ...rest
}) => {
   PrivateRoute.propTypes = {
      component: PropTypes.shape({
         Component: PropTypes.func,
         isAuthenticated: PropTypes.object,
         isLoading: PropTypes.object,
      }),
   };

   return (
      <Route
         {...rest}
         render={(props) => {
            if (!isAuthenticated) {
               return <LoginForm />;
            } else if (isAuthenticated) {
               return <Component {...props} />;
            }
            if (isLoading) {
               return (
                  <Loader type='Grid' color='#00BFFF' height={80} width={80} />
               );
            }
         }}
      />
   );
};

const mapStateToProps = (state) => ({
   isAuthenticated: state.auth.isAuthenticated,
   isLoading: state.auth.isLoading,
});

export default connect(mapStateToProps)(PrivateRoute);
