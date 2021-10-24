//react
import React from 'react';
//redux
import { connect } from 'react-redux';
//router
import { Route } from 'react-router-dom';
import { Redirect } from 'react-router';
//utils
import Loader from 'react-loader-spinner';
//proptypes
import PropTypes from 'prop-types';
import LoginForm from './forms/LoginForm/LoginForm';

const PrivateRoute = ({
	component: Component,
	isAuthenticated,
	isLoading,
	...rest
}) => {
	PrivateRoute.propTypes = {
		component: PropTypes.shape({
			Component: PropTypes.object,
			isAuthenticated: PropTypes.bool,
			isLoading: PropTypes.bool,
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
