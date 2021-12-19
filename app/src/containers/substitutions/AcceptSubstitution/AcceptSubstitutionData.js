// react
import React from 'react';
// utils
import {
  Container,
  BlueButton,
  TextField,
} from '../../../components/styledComponents';
// propTypes
import PropTypes from 'prop-types';

export const AcceptSubstitutionData = ({
  substitutionData,
  takeSubstitution,
}) => {
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

  const handleSubmit = (id) => {
    let sub_id = id.toString();
    takeSubstitution(sub_id);
  };

  const capitalizeName = (name) => {
    return name.charAt(0).toUpperCase() + name.slice(1);
  };

  return (
    <div class="col-12">
      <Container>
        <div className="row text mb-4">
          <p className="text-center">
            {substitutionData?.subject_name
              ? capitalizeName(substitutionData?.subject_name)
              : substitutionData?.subject}{' '}
            w dniu{' '}
            {substitutionData?.datetime
              .split('T')[0]
              .replaceAll('-', '.')
              .split('.')
              .reverse()
              .join('.')}
          </p>
        </div>
        <div className="row mb-4">
          <div className="col-12 col-xl-4 d-flex justify-content-center flex-column mb-4 mb-xl-0">
            <p className="text">Klasa</p>
            <TextField>{substitutionData.level_name}</TextField>
          </div>
          <div className="col-12 col-xl-4 d-flex justify-content-center flex-column mb-4 mb-xl-0">
            <p className="text">Data</p>
            <TextField>
              {substitutionData.datetime.split('T')[0].replaceAll('-', '.') +
                ' / ' +
                substitutionData.datetime
                  .split('T')[1]
                  .split('+')[0]
                  .split(':')[0] +
                ':' +
                substitutionData.datetime
                  .split('T')[1]
                  .split('+')[0]
                  .split(':')[1]}
            </TextField>
          </div>
          <div className="col-12 col-xl-4 d-flex justify-content-center flex-column">
            <p className="text" for="subject">
              Przedmiot
            </p>
            <TextField>{substitutionData.subject_name}</TextField>
          </div>
        </div>
        <div className="col d-flex flex-column justify-content-center">
          <p className="text" for="last-topics">
            Ostatnio przerabiane zagadnienia
          </p>
          <TextField>
            {substitutionData.last_topics
              ? substitutionData.last_topics
              : 'Nie podano.'}
          </TextField>
        </div>
        <div className="col d-flex flex-column mt-4 justify-content-center">
          <p className="text" for="planned-topics">
            Planowane zagadnienia na lekcję
          </p>
          <TextField>
            {substitutionData.planned_topics
              ? substitutionData.planned_topics
              : 'Nie podano.'}
          </TextField>
        </div>
        <div className="col d-flex flex-column mt-4 justify-content-center">
          <p className="text" for="teaching-methodology">
            Metodyka nauczania oraz platforma
          </p>
          <TextField>
            {substitutionData.methodology_and_platform
              ? substitutionData.methodology_and_platform
              : 'Brak danych.'}
          </TextField>
        </div>
        <div className="col d-flex mt-4 justify-content-center">
          <BlueButton onClick={() => handleSubmit(substitutionData.id)}>
            akceptuj
          </BlueButton>
        </div>
      </Container>
    </div>
  );
};

export default AcceptSubstitutionData;
