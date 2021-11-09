//react
import React, { Component, Fragment } from 'react';
//redux
import { connect } from 'react-redux';
//alerts
import { withAlert } from 'react-alert';
//propTypes
import PropTypes from 'prop-types';

class Alerts extends Component {
	static propTypes = {
		error: PropTypes.object.isRequired,
		loginSuccess: PropTypes.bool,
		isAuthenticated: PropTypes.bool,
		user: PropTypes.object,
	};

	componentDidUpdate(prevProps) {
		const { error, alert, loginSuccess, isAuthenticated, user } = this.props;

		if (loginSuccess !== prevProps.loginSuccess) {
			if (loginSuccess) alert.success('Pomyślnie zalogowano');
			if (loginSuccess === null && !isAuthenticated && user === null)
				return alert.info('Pomyślnie wylogowano');
		}

		if (error !== prevProps.error && error !== null) {
			error.email !== undefined
				? alert.error(error.email)
				: alert.error(error.msg);
		}
	}

	render() {
		return <Fragment />;
	}
}

const mapStateToProps = (state) => ({
	isAuthenticated: state.isAuthenticated,
	user: state.auth.user,
	loginSuccess: state.auth.loginSuccess,
	error: state.errors,
});

export default connect(mapStateToProps)(withAlert()(Alerts));
