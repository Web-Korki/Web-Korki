//react
import React, { useEffect } from 'react';
//redux
import { connect } from 'react-redux';
import { get_pending_substitutions } from '../../../redux/actions/substitutions';
//subcomponents
import { AwaitingSubstitutionData } from './AwaitingSubstitutionData';
//utils
import { BackButton } from '../../../components/buttons/BackButton';
//propTypes
import PropTypes from 'prop-types';

const AwaitingSubstitutions = ({
  get_pending_substitutions,
  pending_substitutions,
}) => {
  AwaitingSubstitutions.propTypes = {
    pending_substitutions: PropTypes.object,
  };

  useEffect(() => {
    get_pending_substitutions();
  }, []);

  return (
    <div className="min-h-100 analysis d-flex flex-column justify-content-center align-items-center">
      <div className="container">
        <div className="d-flex justify-content-center flex-lg-row flex-column align-items-center mb-5">
          <div className="d-flex justify-content-between align-items-center mb-4 mb-lg-0">
            <BackButton />
            <h1 className="title">Oczekujące zastępstwa: {pending_substitutions ? pending_substitutions.length : null}</h1>
          </div>
        </div>
        <div className="limiter row g-4">
          {/* mapka =>  */}
          <AwaitingSubstitutionData pendingSubstitutions={pending_substitutions}/>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  pending_substitutions: state.substitutions?.pending_substitutions,
});

export default connect(mapStateToProps, { get_pending_substitutions })(
  AwaitingSubstitutions
);
