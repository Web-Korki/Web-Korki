// react
import React, { useEffect } from 'react';
//redux
import { connect } from 'react-redux';
import { get_taken_substitutions } from '../../../redux/actions/substitutions';
//subcomponents
import TakenSubstitutionsData from './TakenSubstitutionsData';
//utils
import { BackButton } from '../../../components/buttons/BackButton';
//PropTypes
import PropTypes from 'prop-types';

const TakenSubstitutions = ({
  get_taken_substitutions,
  takenSubstitutionsCount,
  takenSubstitutionsData,
  isSuperuser,
}) => {
  TakenSubstitutions.propTypes = {
    get_taken_substitutions: PropTypes.func.isRequired,
    takenSubstitutionsCount: PropTypes.number,
    takenSubstitutionsData: PropTypes.objectOf({
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
    isSuperuser: PropTypes.bool.isRequired,
  };

  useEffect(() => {
    get_taken_substitutions();
  }, []);

  return (
    <div className="min-h-100 analysis d-flex flex-column justify-content-center align-items-center">
      <div className="container">
        <div className="d-flex justify-content-center flex-lg-row flex-column align-items-center mb-5">
          <div className="d-flex justify-content-between align-items-center mb-4 mb-lg-0">
            <BackButton />
            <h1 className="title">
              Przejęte zastępstwa: {takenSubstitutionsCount}
            </h1>
          </div>
        </div>
        <div className="limiter row">
          <TakenSubstitutionsData
            takenSubstitutionsData={takenSubstitutionsData}
            isSuperuser
          />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  takenSubstitutionsCount: state.substitutions.taken_substitutions?.count,
  takenSubstitutionsData: state.substitutions.taken_substitutions?.results,
  isSuperuser: state.auth.isSuperuser,
});

const mapDispatchToProps = {
  get_taken_substitutions,
};

export default connect(mapStateToProps, mapDispatchToProps)(TakenSubstitutions);
