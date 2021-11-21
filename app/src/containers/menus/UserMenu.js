//react
import React from "react";
//redux
import { connect } from "react-redux";
//router
import { Link, Redirect } from 'react-router-dom';
//propTypes
import PropTypes from 'prop-types';
//utils
import Logout from '../forms/Logout';
import { Box } from '../../components/styledComponents';

const UserMenu = ({
  isSuperuser,
  defaultPasswordChanged,
  hasChangedPassword,
}) => {
  UserMenu.propTypes = {
    isSuperuser: PropTypes.bool.isRequired,
    defaultPasswordChanged: PropTypes.bool.isRequired,
    hasChangedPassword: PropTypes.bool,
  };

  if (!defaultPasswordChanged && !hasChangedPassword) {
    return <Redirect push to="/initialPasswordReset" />;
  }

  return (
    <>
      <div className="min-h-100 py-5 py-xl-0 d-flex flex-column justify-content-center align-items-center">
        <div className="container-xl container-fluid p-5 p-lg-0">
          <div className="row d-flex justify-content-xl-between justify-content-md-evenly justify-content-center mb-3 mb-xl-5">
            <h1 className="col-xl-auto text-xl-left text-center title justify-content-xl-start justify-content-center mb-4 mb-xl-0">
              Panel korepetytora
            </h1>
            <div className="col-xl-auto d-flex align-items-center justify-content-xl-end justify-content-center">
              <Logout>wyloguj się</Logout>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-12 col-lg-auto g-4">
              <Link to="/submit_replacement">
                <Box>Zgłoś zastępstwo</Box>
              </Link>
            </div>
            <div className="col-12 col-lg-auto g-4">
              <Link to="/active_replacements">
                <Box>Oczekujące zastępstwa</Box>
              </Link>
            </div>
            <div className="col-12 col-lg-auto g-4">
              <Link to="/fill_in_report">
                <Box>Uzupełnij raport</Box>
              </Link>
            </div>
            {isSuperuser ? (
              <div className="col-12 col-lg-auto g-4">
                <Link to="/admin_menu">
                  <Box>Panel Administratora</Box>
                </Link>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  isSuperuser: state.auth.isSuperuser,
  defaultPasswordChanged: state.auth.defaultPasswordChanged,
  hasChangedPassword: state.auth.user?.is_resetpwd,
});

export default connect(mapStateToProps)(UserMenu);
