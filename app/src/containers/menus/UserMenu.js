//react
import React from 'react';
//redux
import { connect } from 'react-redux';
//router
import { NavLink } from 'react-router-dom';
//propTypes
import PropTypes from 'prop-types';
//utils
import Logout from '../forms/Logout';
import { Box } from '../../components/styledComponents';

const UserMenu = ({ isSuperuser }) => {
  UserMenu.propTypes = {
    isSuperuser: PropTypes.bool.isRequired,
  };

  return (
    <>
      <div className="min-h-100 py-5 py-lg-0 d-flex flex-column justify-content-center align-items-center">
        <div className="container p-5 p-lg-0">
          <div className="row d-flex justify-content-lg-between mb-3 mb-md-5">
            <h1 className="col-lg-auto text-lg-left text-center title justify-content-lg-start justify-content-center mb-4 mb-md-0">
              Panel korepetytora
            </h1>
            <div className="col-lg-auto d-flex align-items-center justify-content-lg-end justify-content-center">
              <Logout>wyloguj się</Logout>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-12 col-lg-auto g-4 g-md-3">
              <NavLink to="/submit_replacement">
                <Box>Zgłoś zastępstwo</Box>
              </NavLink>
            </div>
            <div className="col-12 col-lg-auto g-4 g-md-3">
              <NavLink to="/active_replacements">
                <Box>Oczekujące zastępstwa</Box>
              </NavLink>
            </div>
            <div className="col-12 col-lg-auto g-4 g-md-3">
              <NavLink to="/fill_in_report">
                <Box>Uzupełnij raport</Box>
              </NavLink>
            </div>
            {isSuperuser ? (
              <div className="col-12 col-lg-auto g-4 g-md-3">
                <NavLink to="/admin_menu">
                  <Box>Panel Administratora</Box>
                </NavLink>
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
});

export default connect(mapStateToProps)(UserMenu);
