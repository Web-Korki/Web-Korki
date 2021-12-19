// raect
import React, { useEffect } from 'react';
// redux
import { connect } from 'react-redux';
import {
  get_substitution,
  take_substitution,
} from '../../../redux/actions/substitutions';
// router
import { useParams } from 'react-router-dom';
// utils
import AcceptSubstitutionData from './AcceptSubstitutionData';
// propTypes
import PropTypes from 'prop-types';

export const AcceptSubstitution = ({
  substitutionData,
  get_substitution,
  take_substitution,
}) => {
  AcceptSubstitution.propTypes = {
    substitutionData: PropTypes.object.isRequired,
    get_substitution: PropTypes.func.isRequired,
    take_substitution: PropTypes.func.isRequired,
  };
  const { substitution_id } = useParams();

  useEffect(() => {
    get_substitution(substitution_id);
  }, [substitution_id]);

  return (
    <div className="min-h-100 py-5 py-xl-0 d-flex justify-content-center align-items-center">
      <div className="container">
        <div className="limiter row g-4">
          <AcceptSubstitutionData
            substitutionData={undefined}
            takeSubstitution={take_substitution}
          />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  substitutionData: state.substitutions?.substitution,
});

const mapDispatchToProps = { get_substitution, take_substitution };

export default connect(mapStateToProps, mapDispatchToProps)(AcceptSubstitution);
