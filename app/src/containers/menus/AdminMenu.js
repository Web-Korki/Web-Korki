//react
import React from 'react';
//redux
import { connect } from 'react-redux';
//router
import { NavLink } from 'react-router-dom';
import { Redirect } from 'react-router';
//propTypes
import PropTypes from 'prop-types';
//styledComponents
import { Box } from '../../components/styledComponents/index';
import Logout from '../forms/Logout';

const AdminMenu = ({ isSuperuser }) => {
  AdminMenu.propTypes = {
    isSuperuser: PropTypes.bool.isRequired,
  };

  if (!isSuperuser) {
    return <Redirect push to="/user_menu" />;
  }

  return (
    <div className="adminMenu d-flex flex-column justify-content-center align-items-center">
      <div className="container p-5 p-lg-0">
        <div className="row d-flex justify-content-lg-between mb-3 mb-md-5">
          <h1 className="col-lg-auto text-lg-left text-center title justify-content-lg-start justify-content-center mb-4 mb-md-0">
            Panel administratora
          </h1>
          <div className="col-lg-auto d-flex align-items-center justify-content-lg-end justify-content-center">
            <Logout>wyloguj się</Logout>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-12 col-lg-auto g-4 g-md-3">
            <NavLink to="/register_form">
              <Box>Zarejestruj korepetytora</Box>
            </NavLink>
          </div>
          <div className="col-12 col-lg-auto g-4 g-md-3">
            <NavLink to="/current_report">
              <Box>Bieżący raport</Box>
            </NavLink>
          </div>
          <div className="col-12 col-lg-auto g-4 g-md-3">
            <NavLink to="/lecture_analysis">
              <Box>Analiza - zajęcia</Box>
            </NavLink>
          </div>
          <div className="col-12 col-lg-auto g-4 g-md-3">
            <NavLink to="/volunteer_analysis">
              <Box>Analiza - wolontariusze</Box>
            </NavLink>
          </div>
          <div className="col-12 col-lg-auto g-4 g-md-3">
            <NavLink to="/active_replacements">
              <Box>Oczekujące zastępstwa</Box>
            </NavLink>
          </div>
          <div className="col-12 col-lg-auto g-4 g-md-3">
            <NavLink to="/user_menu">
              <Box>Menu nauczyciela</Box>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isSuperuser: state.auth.isSuperuser,
});

export default connect(mapStateToProps)(AdminMenu);
