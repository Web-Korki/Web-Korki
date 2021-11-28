//react
import React from 'react';
//redux
import { connect } from 'react-redux';
//router
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';
//propTypes
import PropTypes from 'prop-types';
//styledComponents
import { Box } from '../../components/styledComponents/index';
import Logout from '../forms/Logout';

const AdminMenu = ({ isSuperuser, hasChangedPassword }) => {
  AdminMenu.propTypes = {
    isSuperuser: PropTypes.bool.isRequired,
    hasChangedPassword: PropTypes.bool,
  };

  if (!hasChangedPassword) {
    return <Redirect push to="/initialPasswordReset" />;
  } else if (!isSuperuser) {
    return <Redirect push to="/user_menu" />;
  }

  return (
    <div className="min-h-100 py-5 py-xl-0 d-flex flex-column justify-content-center align-items-center">
      <div className="container-xl container-fluid p-5 p-lg-0">
        <div className="row d-flex justify-content-xl-between justify-content-md-evenly justify-content-center mb-3 mb-xl-5">
          <h1 className="col-xl-auto text-xl-left text-center title justify-content-xl-start justify-content-center mb-4 mb-xl-0">
            Panel administratora
          </h1>
          <div className="col-xl-auto d-flex align-items-center justify-content-xl-end justify-content-center">
            <Logout>wyloguj się</Logout>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-12 col-lg-auto g-4">
            <Link to="/admin/register_form">
              <Box>Zarejestruj korepetytora</Box>
            </Link>
          </div>
          <div className="col-12 col-lg-auto g-4">
            <Link to="/admin/current_report">
              <Box>Bieżący raport</Box>
            </Link>
          </div>
          <div className="col-12 col-lg-auto g-4">
            <Link to="/admin/lecture_analysis">
              <Box>Analiza - zajęcia</Box>
            </Link>
          </div>
          <div className="col-12 col-lg-auto g-4">
            <Link to="/admin/volunteer_analysis">
              <Box>Analiza - wolontariusze</Box>
            </Link>
          </div>
          <div className="col-12 col-lg-auto g-4">
            <Link to="/substitutions">
              <Box>Oczekujące zastępstwa</Box>
            </Link>
          </div>
          <div className="col-12 col-lg-auto g-4">
            <Link to="/taken_substitutions">
              <Box>Przejęte zastępstwa</Box>
            </Link>
          </div>
          <div className="col-12 col-lg-auto g-4">
            <Link to="/user_menu">
              <Box>Panel korepetytora</Box>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isSuperuser: state.auth.isSuperuser,
  hasChangedPassword: state.auth.user?.is_resetpwd,
});

export default connect(mapStateToProps)(AdminMenu);
