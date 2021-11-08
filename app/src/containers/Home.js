import React from 'react';
import { GreyButton } from '../components/styledComponents/index';
import { NavLink } from 'react-router-dom';
import { Logo } from '../components/layout/Logo';

export const Home = () => {
  return (
    <div className="h-100 container d-flex flex-column justify-content-center align-items-center">
      <div className="mb-5">
        <Logo />
      </div>
      <div>
        <NavLink to="/login_form">
          <GreyButton>Zaloguj się</GreyButton>
        </NavLink>
      </div>
    </div>
  );
};
