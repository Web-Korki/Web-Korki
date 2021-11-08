import React, { Fragment } from 'react';
import { Redirect, useHistory } from 'react-router';
import { connect } from 'react-redux';
import { logout } from '../../redux/actions/auth';
import { GreyButton } from '../../components/styledComponents';

const Logout = ({ logout }) => {
  const history = useHistory();
  const handleLogout = () => {
    logout();
    history.push('/login_form');
    return <Redirect push to="/login_form" />;
  };

  return (
    <Fragment>
      <GreyButton onClick={() => handleLogout()}>wyloguj się</GreyButton>
    </Fragment>
  );
};

export default connect(null, { logout })(Logout);
