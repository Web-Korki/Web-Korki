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
        <div className="d-flex justify-conent-center mb-5 text-center row">
          <p className="title">Potrzebuję zastępstwa!</p>
        </div>
        <div className="row text mb-4">
          <p className="col-3">Zajęcia: </p>
          <p className="text-center col">
            <TextField>
              {substitutionData?.subject_name
                ? capitalizeName(substitutionData?.subject_name)
                : null}{' '}
              w dniu{' '}
              {substitutionData?.datetime
                .split('T')[0]
                .replaceAll('-', '.')
                .split('.')
                .reverse()
                .join('.')}
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
        <div className="row text mb-4">
          <p className="col-3">Jak się uczymy?</p>
          <p className="col">
            <TextField>
              Ostatnio przerabialiśmy zagadnienia takie jak{' '}
              {substitutionData?.last_topics ? (
                substitutionData?.last_topics
              ) : (
                <span class="text-danger">
                  'ostatnio przerabiane zagadnienia template'
                </span>
              )}{' '}
              i zaplanowaliśmy, że podczas tych zajęć omówimy zagadnienia takie
              jak{' '}
              {substitutionData?.planned_topics ? (
                substitutionData?.planned_topics
              ) : (
                <span class="text-danger">
                  'planowane do przerobienia zagadnienia template.'
                </span>
              )}
              Uczymy się poprzez{' '}
              {substitutionData?.methodology_and_platform ? (
                substitutionData?.methodology_and_platform
              ) : (
                <span class="text-danger">'coco-jumbo i do przodu'</span>
              )}
            </TextField>
          </p>
        </div>
        <div class="row">
          <BlueButton className="col justify-content-center">
            Przyjmij zastępstwo
          </BlueButton>
        </div>
      </Container>
    </div>
  );
};

export default AcceptSubstitutionData;
