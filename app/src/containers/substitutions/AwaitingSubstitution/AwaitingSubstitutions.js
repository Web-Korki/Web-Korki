//react
import React, { useEffect } from 'react';
//redux
import { connect } from 'react-redux';
import {
  get_pending_substitutions,
  take_substitution,
} from '../../../redux/actions/substitutions';
//subcomponents
import { AwaitingSubstitutionData } from './AwaitingSubstitutionData';
//utils
import { BackButton } from '../../../components/buttons/BackButton';
//propTypes
import PropTypes from 'prop-types';

const AwaitingSubstitutions = ({
  get_pending_substitutions,
  pendingSubstitutionsCount,
  pendingSubstitutionsData,
  take_substitution,
  isSuperuser,

}) => {
  AwaitingSubstitutions.propTypes = {
    pendingSubstitutionsCount: PropTypes.number,
    pendingSubstitutionsData: PropTypes.objectOf({
      id: PropTypes.number,
      datetime: PropTypes.string,
      new_teacher_found: PropTypes.bool,
      last_topics: PropTypes.string,
      planned_topics: PropTypes.string,
      methodology_and_platform: PropTypes.string,
      old_teacher: PropTypes.number,
      level: PropTypes.number,
      subject: PropTypes.number,
      new_teacher: PropTypes.number,
    }),
    take_substitution: PropTypes.func,
    isSuperuser: PropTypes.bool.isRequired,
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
            <h1 className="title">
              Oczekujące zastępstwa: {pendingSubstitutionsCount}
            </h1>
          </div>
        </div>
        <div className="limiter row g-4">
          <AwaitingSubstitutionData
            pendingSubstitutionsData={pendingSubstitutionsData}
            takeSubstitution={take_substitution}
            isSuperuser
          />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  pendingSubstitutionsCount: state.substitutions?.pending_substitutions?.count,
  pendingSubstitutionsData: state.substitutions?.pending_substitutions?.results,
  isSuperuser: state.auth.user?.is_superuser,
});

const mapDispatchToProps = {
  get_pending_substitutions,
  take_substitution,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AwaitingSubstitutions);
