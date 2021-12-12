//react
import React from 'react';
//redux
import { connect } from 'react-redux';
import {
  get_levels,
  get_subjects,
} from '../../../redux/actions/substitutionForm';
import { create_substitution } from '../../../redux/actions/substitutions';
// utils
import SubmitSubstitutionData from './SubmitSubstitutionData';
// propTypes
import PropTypes from 'prop-types';

const SubmitSubstitution = ({
  formSelectData,
  get_levels,
  get_subjects,
  create_substitution,
}) => {
  SubmitSubstitution.propTypes = {
    get_levels: PropTypes.func.isRequired,
    get_subjects: PropTypes.func.isRequired,
    formSelectData: PropTypes.object.isRequired,
    create_substitution: PropTypes.func.isRequired,
  };

  return (
    <SubmitSubstitutionData
      getLevels={get_levels}
      getSubjects={get_subjects}
      levels={formSelectData.levels}
      subjects={formSelectData.subjects}
      createSubstitution={create_substitution}
    />
  );
};

const mapStateToProps = (state) => ({
  formSelectData: state.substitutionForm,
});

const mapDispatchToProps = { get_levels, get_subjects, create_substitution };

export default connect(mapStateToProps, mapDispatchToProps)(SubmitSubstitution);
