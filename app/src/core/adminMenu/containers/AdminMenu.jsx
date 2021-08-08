import {
  StyledGreyButton,
  StyledBox,
} from "../../sharedComponents/styledComponents/index";
import { NavLink } from "react-router-dom";

export const AdminMenu = () => {
  return (
    <>
      <div className="adminMenu d-flex justify-content-center">
        <div className="container">
          <div className="row d-flex justify-content-lg-between mb-5">
            <h1 className="col-md-auto text-lg-left text-center title justify-content-lg-start justify-content-center">
              Panel administratora
            </h1>
            <div className="col-md d-flex align-items-center justify-content-lg-end justify-content-center">
              <NavLink to="/login_form">
                <StyledGreyButton>wyloguj się</StyledGreyButton>
              </NavLink>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-12 col-lg-auto p-lg-2 p-1">
              <NavLink to="/volunteer_register">
                <StyledBox>Zarejestruj korepetytora</StyledBox>
              </NavLink>
            </div>
            <div className="col-12 col-lg-auto p-lg-2 p-1">
              <NavLink to="/current_report">
                <StyledBox>Bieżący raport</StyledBox>
              </NavLink>
            </div>
            <div className="col-12 col-lg-auto p-lg-2 p-1">
              <NavLink to="/lecture_analysis">
                <StyledBox>Analiza - zajęcia</StyledBox>
              </NavLink>
            </div>
            <div className="col-12 col-lg-auto p-lg-2 p-1">
              <NavLink to="/volunteer_analysis">
                <StyledBox>Analiza - wolontariusze</StyledBox>
              </NavLink>
            </div>
            <div className="col-12 col-lg-auto p-lg-2 p-1">
              <NavLink to="/active_replacements">
                <StyledBox>Aktywne zastępstwa</StyledBox>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
