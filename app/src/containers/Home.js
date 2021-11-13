//react
import React from 'react';
//redux
import { connect } from 'react-redux';
//router
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
//utils
import { GreyButton } from '../components/styledComponents/index';
import { Logo } from '../components/layout/Logo';
//propTypes
import PropTypes from 'prop-types';

const Home = ({ isAuthenticated, isSuperuser }) => {
  Home.propTypes = {
    isAuthenticated: PropTypes.bool,
    isSuperuser: PropTypes.bool,
  };

  if (isAuthenticated) {
    if (isSuperuser) {
      return <Redirect push to="/admin_menu" />;
    } else {
      return <Redirect push to="/user_menu" />;
    }
  }

  return (
    <div className="h-100 container d-flex flex-column justify-content-center align-items-center">
      <div className="mb-5">
        <Logo />
      </div>
      <div>
        <Link to="/login_form">
          <GreyButton>Zaloguj się</GreyButton>
        </Link>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  isSuperuser: state.auth.isSuperuser,
});

export default connect(mapStateToProps)(Home);
