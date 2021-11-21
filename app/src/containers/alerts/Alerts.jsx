//react
import React, { Component, Fragment } from 'react';
//redux
import { connect } from 'react-redux';
import { reset_state } from '../../redux/actions/auth';
//alerts
import { withAlert } from 'react-alert';
//propTypes
import PropTypes from 'prop-types';

class Alerts extends Component {
  static propTypes = {
    accountCreated: PropTypes.bool,
    isAuthenticated: PropTypes.bool,
    defaultPassowrdChanged: PropTypes.bool,
    loginSuccess: PropTypes.bool,
    user: PropTypes.object,
    error: PropTypes.object.isRequired,
    reset_state: PropTypes.func.isRequired,
  };

  componentDidUpdate(prevProps) {
    const {
      accountCreated,
      isAuthenticated,
      defaultPassowrdChanged,
      loginSuccess,
      user,
      error,
      alert,
      reset_state,
    } = this.props;

    if (loginSuccess !== prevProps.loginSuccess) {
      if (loginSuccess) alert.success('Pomyślnie zalogowano');
      if (loginSuccess === null && !isAuthenticated && user === null)
        return alert.info('Pomyślnie wylogowano');
    }

    if (accountCreated !== prevProps.accountCreated) {
      if (accountCreated) {
        alert.success('Rejestracja przebiegła pomyślnie');
        reset_state();
      }
    }

    if (defaultPassowrdChanged !== prevProps.defaultPassowrdChanged) {
      if (defaultPassowrdChanged) {
        alert.success('Hasło zostało zmienione');
      }
      if (!defaultPassowrdChanged) {
        alert.error('Nie udało się zmienić hasła'); //MOŻE ZWROTKA Z ERR RESPONSE LEPSZA?
      }
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
  accountCreated: state.auth.accountCreated,
  isAuthenticated: state.isAuthenticated,
  defaultPassowrdChanged: state.auth.defaultPassowrdChanged,
  loginSuccess: state.auth.loginSuccess,
  user: state.auth.user,
  error: state.errors,
});

export default connect(mapStateToProps, { reset_state })(withAlert()(Alerts));
