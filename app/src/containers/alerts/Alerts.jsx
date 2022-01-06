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
    create_substitution_success: PropTypes.bool.isRequired,
  };

  componentDidUpdate(prevProps) {
    const {
      accountCreated,
      isAuthenticated,
      defaultPasswordChanged,
      loginSuccess,
      user,
      error,
      alert,
      reset_state,
      create_substitution_success,
    } = this.props;

    if (create_substitution_success !== prevProps.create_substitution_success) {
      if (create_substitution_success)
        alert.success('Prośba o zastępstwo została wysłana');
      if (create_substitution_success)
        alert.error('Nie udało się zgłosić prośby o zastępstwo');
      reset_state();
    }

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

    if (defaultPasswordChanged !== prevProps.defaultPasswordChanged) {
      if (defaultPasswordChanged) {
        alert.success('Hasło zostało zmienione');
      }
      if (!defaultPasswordChanged) {
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
  defaultPasswordChanged: state.auth.defaultPasswordChanged,
  loginSuccess: state.auth.loginSuccess,
  user: state.auth.user,
  error: state.errors,

  //substitutions:
  create_substitution_success: state.substitutions.create_substitution_success,
});

export default connect(mapStateToProps, { reset_state })(withAlert()(Alerts));
