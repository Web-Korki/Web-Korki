import React from 'react';
import {
  StyledGreyButton,
  StyledBox,
<<<<<<< HEAD:app/src/core/userMenu/containers/UserMenu.jsx
} from "../../sharedComponents/styledComponents/index";
import { NavLink } from "react-router-dom";
import "../UserMenu.style.css";
import { connect } from "react-redux";
import { logout } from "../../../redux/actions/auth";
=======
} from '../../components/styledComponents/index';
import { Link, NavLink } from 'react-router-dom';
import './UserMenu.style.css';
import { connect } from 'react-redux';
import { logout } from '../../redux/actions/auth';
>>>>>>> master:app/src/containers/menus/UserMenu.js

const UserMenu = ({ logout }) => {
  return (
    <>
      <div className="userMenu d-flex justify-content-center">
        <div className="container">
          <div className="row d-flex justify-content-lg-between mb-5">
            <h1 className="col-md-auto text-lg-left text-center title justify-content-lg-start justify-content-center">
              Menu
            </h1>
            <div className="col-md d-flex align-items-center justify-content-lg-end justify-content-center">
              <StyledGreyButton onClick={logout}>wyloguj się</StyledGreyButton>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-12 col-lg-auto p-lg-2 p-1">
              <NavLink to="/submit_replacement">
                <StyledBox>Zgłoś zastępstwo</StyledBox>
              </NavLink>
            </div>
            <div className="col-12 col-lg-auto p-lg-2 p-1">
              <NavLink to="/active_replacements">
                <StyledBox>Aktywne zastępstwa</StyledBox>
              </NavLink>
            </div>
            <div className="col-12 col-lg-auto p-lg-2 p-1">
              <NavLink to="/fill_in_report">
                <StyledBox>Uzupełnij raport</StyledBox>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { logout })(UserMenu);
