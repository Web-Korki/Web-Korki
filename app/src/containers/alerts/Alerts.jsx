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
		isSuperuser: PropTypes.bool,
		isAuthenticated: PropTypes.bool,
		user: PropTypes.bool,
	};

	componentDidUpdate(prevProps) {
		const { error, alert, loginSuccess, isSuperuser, isAuthenticated, user } =
			this.props;

		if (loginSuccess !== prevProps.loginSuccess) {
			if (loginSuccess && isSuperuser)
				return alert.success('Zalogowano jako administrator');
			if (loginSuccess && !isSuperuser)
				return alert.success('Zalogowano jako korepetytor');
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
	isSuperuser: state.auth.isSuperuser,
	error: state.errors,
});

export default connect(mapStateToProps)(withAlert()(Alerts));
