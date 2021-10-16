import React from 'react';
import { StyledBox } from '../components/styledComponents/index';
import { NavLink } from 'react-router-dom';
import { Logo } from '../components/layout/Logo';

export const Home = () => {
  return (
    <div className="d-flex justify-content-center align-items-center flex-column Home">
      <div
        className="mb-5"
        style={{
          height: '300px',
          width: '300px',
        }}
      >
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
