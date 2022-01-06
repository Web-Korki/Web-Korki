//react
import React from 'react';
//styles
import {
  TextField,
  Container,
} from '../../../components/styledComponents/index';
//propTypes
import PropTypes from 'prop-types';

const TakenSubstitutionsData = ({ isSuperuser, takenSubstitutionsData }) => {
  TakenSubstitutionsData.propTypes = {
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

  return (
    <div className="col-12">
      {takenSubstitutionsData ? (
        takenSubstitutionsData.map((substitution) => {
          return (
            <Container key={substitution.id} className="mb-5">
              <div className="row mb-4">
                <div className="col-12 col-xl-6 d-flex justify-content-center flex-column mx-auto mb-4 mb-xl-0">
                  <p className="text">Zgłosił</p>
                  <TextField>
                    {substitution.old_teacher_fb
                      ? substitution.old_teacher_fb
                      : substitution.old_teacher}
                  </TextField>
                </div>
                {isSuperuser ? (
                  <div className="col-12 col-xl-6 d-flex justify-content-center flex-column mx-auto mb-4 mb-xl-0">
                    <p className="text">Przyjął</p>
                    <TextField>
                      {substitution.new_teacher_fb
                        ? substitution.new_teacher_fb
                        : substitution.new_teacher}
                    </TextField>
                  </div>
                ) : null}
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
                    : 'nie podano'}
                </TextField>
              </div>
              <div className="col d-flex flex-column mt-4 justify-content-center">
                <p className="text">Planowane zagadnienia na lekcję</p>
                <TextField>
                  {substitution.planned_topics
                    ? substitution.planned_topics
                    : 'nie podano'}
                </TextField>
              </div>
              <div className="col d-flex flex-column mt-4 justify-content-center">
                <p className="text">Metodyka nauczania oraz platforma</p>
                <TextField>
                  {substitution.methodology_and_platform
                    ? substitution.methodology_and_platform
                    : 'brak danych'}
                </TextField>
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

export default TakenSubstitutionsData;
