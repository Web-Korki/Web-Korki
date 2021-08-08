import React from "react";
import { StyledBox } from "../../sharedComponents/styledComponents/index";
import { NavLink } from "react-router-dom";

export const Home = () => {
  return (
    <div className="d-flex justify-content-center align-items-center flex-column Home">
      <div
        className="mb-5"
        style={{
          height: "300px",
          width: "300px",
          border: "1px solid black",
        }}
      >
        {/* style attribute to be delated once logo will be ready */}
        <h1>Miejsce na logo</h1>
      </div>
      <div>
        <NavLink to="/login_form">
          <StyledBox>Zaloguj się</StyledBox>
        </NavLink>
      </div>
    </div>
  );
};
