import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';

const PrivateRoute = ({ component: Component, auth, ...rest }) => (
	<Route
		{...rest}
		render={(props) => {
			if (auth.isLoading) {
				return (
					<Loader
						type='Puff'
						color='#00BFFF'
						height={100}
						width={100}
						timeout={3000} //3 secs
					/>
				); //implement loader
			} else if (!auth.isAuthenticated) {
				return <Redirect to='/login_form' />;
			} else {
				return <Component {...props} />;
			}
		}}
	/>
);

const mapStateToProps = (state) => ({
	auth: state.auth,
});

export default connect(mapStateToProps)(PrivateRoute);
