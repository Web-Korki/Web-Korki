//react
import React, { Component, Fragment } from 'react';

//redux
import { connect } from 'react-redux';

//propTypes
import PropTypes from 'prop-types';

//alerts
import { withAlert } from 'react-alert';

class Alerts extends Component {
	static propTypes = {
		accountCreated: PropTypes.bool,
		error: PropTypes.object.isRequired,
		loginSuccess: PropTypes.bool,
		isSuperuser: PropTypes.bool,
	};

	componentDidUpdate(prevProps) {
		const { error, alert, loginSuccess, isSuperuser, accountCreated } =
			this.props;

		// if (accountCreated !== prevProps.accountCreated) {
		// 	accountCreated
		// 		? alert.success('Pomyślnie zarejestrowano użytkownika')
		// 		: alert.error('Rejestracja użytkownika nie powiodła się');
		// }

		if (loginSuccess !== prevProps.loginSuccess) {
			loginSuccess && !isSuperuser
				? alert.success('Poprawnie zalogowano jako nauczyciel')
				: loginSuccess && isSuperuser
				? alert.success('Poprawnie zalogowano jako administrator')
				: alert.info('Poprawnie wylogowano z portalu');
		}

		if (error !== prevProps.error) {
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
	accountCreated: state.auth.accountCreated,
	error: state.errors,
	loginSuccess: state.auth.loginSuccess,
	isSuperuser: state.auth.user?.is_superuser,
});

export default connect(mapStateToProps)(withAlert()(Alerts));
