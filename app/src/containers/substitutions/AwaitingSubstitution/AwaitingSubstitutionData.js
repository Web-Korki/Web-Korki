//react
import React from 'react';
//utils
import {
  TextField,
  Container,
  GreyButton,
  BlueButton,
} from '../../../components/styledComponents/index';
//propTypes:
import PropTypes from 'prop-types';

//dane z reduxa trzeba wyciągnąć komponent wyżej i tutaj podać jako propy, ergo ten komponent wgl nie będzie podłączony do reduxa
export const AwaitingSubstitutionData = ({ pendingSubstitutionsData }) => {
  AwaitingSubstitutionData.propTypes = {
    pendingSubstitutionsData: PropTypes.shape({
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
  }; // what's wrong with propTypes here?

  return (
    <div className="col-12">
      {pendingSubstitutionsData
        ? pendingSubstitutionsData.map((substitution) => {
            return (
              <Container className="mb-5">
                <div className="row mb-4">
                  <div className="col-12 col-xl-4 d-flex justify-content-center flex-column mb-4 mb-xl-0">
                    <p className="text">Klasa</p>
                    <TextField>{substitution.level}</TextField>
                  </div>
                  <div className="col-12 col-xl-4 d-flex justify-content-center flex-column mb-4 mb-xl-0">
                    <p className="text">Data</p>
                    <TextField>Data</TextField>
                  </div>
                  <div className="col-12 col-xl-4 d-flex justify-content-center flex-column">
                    <p className="text" for="subject">
                      Przedmiot
                    </p>
                    <TextField>Przedmiot</TextField>
                  </div>
                </div>
                <div className="col d-flex flex-column justify-content-center">
                  <p className="text" for="last-topics">
                    Ostatnio przerabiane zagadnienia
                  </p>
                  <TextField>Dupa na maśle</TextField>
                </div>
                <div className="col d-flex flex-column mt-4 justify-content-center">
                  <p className="text" for="planned-topics">
                    Planowane zagadnienia na lekcję
                  </p>
                  <TextField>Masło w dupie</TextField>
                </div>
                <div className="col d-flex flex-column mt-4 justify-content-center">
                  <p className="text" for="teaching-methodology">
                    Metodyka nauczania oraz platforma
                  </p>
                  <TextField>Teams ssie, zoom mniej</TextField>
                </div>
                <div className="col d-flex mt-4 justify-content-between">
                  <GreyButton>odrzuć</GreyButton>
                  <BlueButton>akceptuj</BlueButton>
                </div>
              </Container>
            );
          })
        : null}
    </div>
  );
};
