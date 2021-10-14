import React from 'react';
import { StyledInactiveReplacementMessage } from '../components/styledComponents/index';
import { NavLink } from 'react-router-dom';

export const InactiveReplacement = () => {
  return (
    <>
      <div className="inactiveReplacementWrapper d-flex align-items-center justify-content-center">
        <div className="inactiveReplacementInnerWrapper">
          <div className="row">
            <div className="sorryMessage text-center col-12">
              <h1>Przepraszamy</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <NavLink to="/UserMenu">
                <StyledInactiveReplacementMessage>
                  <h1>Zastępstwo nieaktywne</h1>
                </StyledInactiveReplacementMessage>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
