//react
import React from 'react';
//styles
import { TextField, Container } from '../../components/styledComponents/index';
//redux
import { connect } from 'react-redux';
//propTypes
import PropTypes from 'prop-types';

const TakenSubstitutionsData = ({ isSuperuser }) => {
  TakenSubstitutionsData.propTypes = {
    isSuperuser: PropTypes.bool.isRequired,
  };

  return (
    <div className="col-12">
      <Container>
        <div className="row mb-4">
          <div className="col-12 col-xl-6 d-flex justify-content-center flex-column mx-auto mb-4 mb-xl-0">
            <p className="text">Zgłosił</p>
            <TextField>James Bond</TextField>
          </div>
          {isSuperuser ? (
            <div className="col-12 col-xl-6 d-flex justify-content-center flex-column mx-auto mb-4 mb-xl-0">
              <p className="text">Przyjął</p>
              <TextField>M</TextField>
            </div>
          ) : null}
        </div>
        <div className="row mb-4">
          <div className="col-12 col-xl-4 d-flex justify-content-center flex-column mb-4 mb-xl-0">
            <p className="text">Klasa</p>
            <TextField>Klasa</TextField>
          </div>
          <div className="col-12 col-xl-4 d-flex justify-content-center flex-column mb-4 mb-xl-0">
            <p className="text">Data</p>
            <TextField>Data</TextField>
          </div>
          <div className="col-12 col-xl-4 d-flex justify-content-center flex-column">
            <p className="text">Przedmiot</p>
            <TextField>Przedmiot</TextField>
          </div>
        </div>
        <div className="col d-flex flex-column justify-content-center">
          <p className="text">Ostatnio przerabiane zagadnienia</p>
          <TextField>Dupa na maśle</TextField>
        </div>
        <div className="col d-flex flex-column mt-4 justify-content-center">
          <p className="text">Planowane zagadnienia na lekcję</p>
          <TextField>Masło w dupie</TextField>
        </div>
        <div className="col d-flex flex-column mt-4 justify-content-center">
          <p className="text">Metodyka nauczania oraz platforma</p>
          <TextField>Teams ssie, zoom mniej</TextField>
        </div>
        <div className="col d-flex mt-4 justify-content-between"></div>
      </Container>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isSuperuser: state.auth.isSuperuser,
});

export default connect(mapStateToProps)(TakenSubstitutionsData);
