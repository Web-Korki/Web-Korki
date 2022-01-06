//react
import React from 'react';
//utils
import {
  TextField,
  Container,
  BlueButton,
} from '../../../components/styledComponents/index';
//propTypes:
import PropTypes from 'prop-types';

export const AwaitingSubstitutionData = ({
  pendingSubstitutionsData,
  takeSubstitution,
  isSuperuser,
}) => {
  AwaitingSubstitutionData.propTypes = {
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
    takeSubstitution: PropTypes.func.isRequired,
    isSuperuser: PropTypes.bool.isRequired,
  };

  const handleSubmit = (id) => {
    let sub_id = id.toString();
    takeSubstitution(sub_id);
  };

  const capitalizeName = (name) => {
    return name.charAt(0).toUpperCase() + name.slice(1);
  };

  return (
    <div className="col-12">
      {pendingSubstitutionsData ? (
        pendingSubstitutionsData.map((substitution) => {
          return (
            <Container
              className="mb-5"
              key={substitution.id}
              id={substitution.id} // in the context of this container it's safe, because even if the user will discard the substitution, the substitutions array is not being refiltered on the BE
            >
              <div className="row text mb-4">
                <p className="text-center">
                  {substitution?.subject_name
                    ? capitalizeName(substitution?.subject_name)
                    : substitution?.subject}{' '}
                  w dniu{' '}
                  {substitution?.datetime
                    .split('T')[0]
                    .replaceAll('-', '.')
                    .split('.')
                    .reverse()
                    .join('.')}
                </p>
                {isSuperuser && (
                  <>
                    <span>Zgłosił </span>
                    <TextField>
                      {substitution.old_teacher_fb
                        ? substitution.old_teacher_fb
                        : 'Nauczyciel nie podał swojego nicku fb'}
                    </TextField>
                  </>
                )}
              </div>
              <div className="row mb-4">
                <div className="col-12 col-xl-4 d-flex justify-content-center flex-column mb-4 mb-xl-0">
                  <p className="text">Klasa</p>
                  <TextField>{substitution.level_name}</TextField>
                </div>
                <div className="col-12 col-xl-4 d-flex justify-content-center flex-column mb-4 mb-xl-0">
                  <p className="text">Data</p>
                  <TextField>
                    {substitution.datetime.split('T')[0].replaceAll('-', '.') +
                      ' / ' +
                      substitution.datetime
                        .split('T')[1]
                        .split('+')[0]
                        .split(':')[0] +
                      ':' +
                      substitution.datetime
                        .split('T')[1]
                        .split('+')[0]
                        .split(':')[1]}
                  </TextField>
                </div>
                <div className="col-12 col-xl-4 d-flex justify-content-center flex-column">
                  <p className="text">Przedmiot</p>
                  <TextField>{substitution.subject_name}</TextField>
                </div>
              </div>
              <div className="col d-flex flex-column justify-content-center">
                <p className="text">Ostatnio przerabiane zagadnienia</p>
                <TextField>
                  {substitution.last_topics
                    ? substitution.last_topics
                    : 'Nie podano.'}
                </TextField>
              </div>
              <div className="col d-flex flex-column mt-4 justify-content-center">
                <p className="text">Planowane zagadnienia na lekcję</p>
                <TextField>
                  {substitution.planned_topics
                    ? substitution.planned_topics
                    : 'Nie podano.'}
                </TextField>
              </div>
              <div className="col d-flex flex-column mt-4 justify-content-center">
                <p className="text">Metodyka nauczania oraz platforma</p>
                <TextField>
                  {substitution.methodology_and_platform
                    ? substitution.methodology_and_platform
                    : 'Brak danych.'}
                </TextField>
              </div>
              <div className="col d-flex mt-4 justify-content-center">
                <BlueButton onClick={() => handleSubmit(substitution.id)}>
                  akceptuj
                </BlueButton>
              </div>
            </Container>
          );
        })
      ) : (
        <div className="col-12">
          <Container>
            <div className="row">
              <p className="text-center title">Brak danych do wyświetlenia</p>
            </div>
            <div className="row justify-content-center">
              <p className="text-right text w-50 mt-5">
                Może to być błąd przy pobieraniu danych z serwera. Odśwież
                stronę, aby spróbować ponownie.
              </p>
            </div>
          </Container>
        </div>
      )}
    </div>
  );
};
