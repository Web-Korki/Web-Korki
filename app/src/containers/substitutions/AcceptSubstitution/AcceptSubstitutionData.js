// react
import React from 'react';
// router
import { Link } from 'react-router-dom';
// utils
import {
  Container,
  BlueButton,
  TextField,
} from '../../../components/styledComponents';
// propTypes
import PropTypes from 'prop-types';

export const AcceptSubstitutionData = ({ substitutionData }) => {
  AcceptSubstitutionData.propTypes = {
    substitutionData: PropTypes.shape({
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
    }).isRequired,
    takeSubstitution: PropTypes.func.isRequired,
  };

  const capitalizeName = (name) => {
    return name.charAt(0).toUpperCase() + name.slice(1);
  };

  return (
    <div className="min-h-100 py-5 py-xl-0 d-flex justify-content-center align-items-center accepted-substitution">
      <Container>
        <div className="d-flex justify-conent-center mb-5">
          <h1 className="title">Potrzebuję zastępstwa!</h1>
        </div>
        <div className="row text mb-4">
          <p className="col-3">Zajęcia: </p>
          <p className="text-center col">
            <TextField>
              {substitutionData?.subject_name
                ? capitalizeName(substitutionData.subject_name)
                : null}{' '}
              dla{' '}
              {substitutionData?.level_name
                ? substitutionData?.level_name
                : null}
            </TextField>
          </p>
        </div>
        <div className="row text mb-4">
          <p className="col-3">Kiedy: </p>
          <p className="text-center col">
            <TextField>
              {substitutionData?.datetime.split('T')[0] +
                ' ' +
                '/' +
                ' ' +
                substitutionData?.datetime
                  .split('T')[1]
                  .split('+')[0]
                  .split(':')[0] +
                ':' +
                substitutionData?.datetime
                  .split('T')[1]
                  .split('+')[0]
                  .split(':')[1]}
            </TextField>
          </p>
        </div>

        <BlueButton>
          <Link to="/taken_substitutions" className="link">
            <p className="text-sm mt-3">Sprawdź przyjęte zastępstwa</p>
          </Link>
        </BlueButton>
      </Container>
    </div>
  );
};

export default AcceptSubstitutionData;
