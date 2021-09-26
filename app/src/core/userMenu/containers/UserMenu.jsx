import React from "react";
import {
  StyledGreyButton,
  StyledBox,
} from "../../sharedComponents/styledComponents/index";
import { Link, NavLink } from "react-router-dom";
import "../UserMenu.style.css";
import { connect } from "react-redux";
import { logout } from "../../../redux/actions/auth";

export const UserMenu = ({ logout }) => {
  const logoutHandler = () => {
    logout();
  }

  return (
    <>
      <div className="userMenu d-flex justify-content-center">
        <div className="container">
          <div className="row d-flex justify-content-lg-between mb-5">
            <h1 className="col-md-auto text-lg-left text-center title justify-content-lg-start justify-content-center">
              Menu
            </h1>
            <div className="col-md d-flex align-items-center justify-content-lg-end justify-content-center">
              <NavLink to="/login_form">
                <StyledGreyButton>wyloguj się</StyledGreyButton>
              </NavLink>
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

export default connect(null, {logout})(UserMenu)