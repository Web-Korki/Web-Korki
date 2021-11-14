//react
import React, { useEffect } from 'react';
//redux
import store from '../../store';
import { connect } from 'react-redux';
import { get_pending_substitutions } from '../../redux/actions/substitutions';
//subcomponents
import { AwaitingSubstitutionData } from './AwaitingSubstitutionData';
//utils
import { BackButton } from '../../components/buttons/BackButton';
//propTypes
import PropTypes from 'prop-types';

const AwaitingSubstitutions = ({ get_pending_substitutions }) => {
  const returnValues = () => {
    get_pending_substitutions();
  };

  return (
    <div className="min-h-100 analysis d-flex flex-column justify-content-center align-items-center">
      <div className="container">
        <div className="d-flex justify-content-center flex-lg-row flex-column align-items-center mb-5">
          <div className="d-flex justify-content-between align-items-center mb-4 mb-lg-0">
            <BackButton />
            <h1 className="title">Oczekujące zastępstwa: {4}</h1>
          </div>
        </div>
        <button onClick={() => returnValues()}>Console.log values</button>
        <div className="limiter row g-4">
          <AwaitingSubstitutionData />
          <AwaitingSubstitutionData />
          <AwaitingSubstitutionData />
          <AwaitingSubstitutionData />
        </div>
      </div>
    </div>
  );
};

export default connect(null, { get_pending_substitutions })(
  AwaitingSubstitutions
);
