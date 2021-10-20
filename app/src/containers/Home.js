import React from 'react';
import { StyledBox } from '../components/styledComponents/index';
import { NavLink } from 'react-router-dom';
import { Logo } from '../components/layout/Logo';

export const Home = () => {
  return (
    <div className="homepage d-flex flex-column justify-content-center align-items-center">
      <div className="mb-5">
        <Logo />
      </div>
      <div>
        <NavLink to="/login_form">
          <StyledBox>Zaloguj się</StyledBox>
        </NavLink>
      </div>
    </div>
  );
};
