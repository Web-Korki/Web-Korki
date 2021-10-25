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
		error: PropTypes.object,
		loginSuccess: PropTypes.bool,
		isSuperuser: PropTypes.bool,
	};

	componentDidUpdate(prevProps) {
		const { error, alert, loginSuccess, isSuperuser } = this.props;

		// if (accountCreated !== prevProps.accountCreated) {
		// 	accountCreated
		// 		? alert.success('Pomyślnie zarejestrowano użytkownika')
		// 		: alert.error('Rejestracja użytkownika nie powiodła się');
		// }

		if (loginSuccess !== prevProps.loginSuccess) {
			loginSuccess && isSuperuser
				? alert.success('Poprawnie zalogowano jako administrator')
				: loginSuccess && !isSuperuser
				? alert.success('Poprawnie zalogowano jako nauczyciel')
				: alert.info('Poprawnie wylogowano z portalu');
		}

		if (
			error !== prevProps.error &&
			error.msg !== null &&
			error.email !== null &&
			error.status !== null
		) {
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
	loginSuccess: state.auth.loginSuccess,
	isSuperuser: state.auth.isSuperuser,
	error: state.errors,
});

export default connect(mapStateToProps)(withAlert()(Alerts));
