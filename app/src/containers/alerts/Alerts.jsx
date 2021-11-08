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
    error: PropTypes.object.isRequired,
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
        ? alert.success('Zalogowano jako administrator')
        : loginSuccess && !isSuperuser
        ? alert.success('Zalogowano jako korepetytor')
        : alert.info('Pomyślnie wylogowano');
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
  loginSuccess: state.auth.loginSuccess,
  isSuperuser: state.auth.isSuperuser,
  error: state.errors,
});

export default connect(mapStateToProps)(withAlert()(Alerts));
