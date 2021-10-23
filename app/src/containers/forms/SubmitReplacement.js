import React from 'react';
import { connect } from 'react-redux';
import {
  StyledDate,
  StyledTextarea,
  StyledBlueButton,
  Container,
} from '../../components/styledComponents/index';
import { BackButton } from '../../components/buttons/BackButton';
import Select from '../../components/components/Select';

export const SubmitReplacement = () => {
  return (
    <div className="mx-2 d-flex justify-content-center align-items-center flex-column submitReplacement">
      <Container className="d-flex align-items-center flex-column submitReplacementContainer">
        <div class="d-flex mb-2 mb-md-5">
          <BackButton />
          <h1 className="title ml-2">Formularz zgłaszania zastępstwa</h1>
        </div>
        <div className="row justify-content-center">
          <div className="row">
            <div className="col d-flex justify-content-center flex-column mt-4">
              <label className="text" for="class">
                Klasa
              </label>
              <Select id="class" required>
                {/* option tag rendered conditi */}
              </Select>
            </div>
            <div className="col d-flex justify-content-center flex-column mt-4">
              <label for="date" className="text">
                Data
              </label>
              <div className="d-flex justify-content-center">
                <StyledDate
                  className="d-flex justify-content-center"
                  type="date"
                  id="date"
                  required
                />
              </div>
            </div>
            <div className="col d-flex justify-content-center flex-column mt-4">
              <label className="text" for="subject">
                Przedmiot
              </label>
              <Select id="subject" required>
                {/* option tag rendered conditi */}
              </Select>
            </div>
          </div>

          <div className="col d-flex flex-column mt-4 justify-content-center">
            <label className="text" for="last-topics">
              Ostatnio przerabiane zagadnienia
            </label>
            <StyledTextarea
              className="align-self-center pl-2"
              name="last-topics"
            ></StyledTextarea>
          </div>
          <div className="col d-flex flex-column mt-4 justify-content-center">
            <label className="text" for="planned-topics">
              Planowane zagadnienia na lekcję
            </label>
            <StyledTextarea
              className="align-self-center pl-2"
              name="planned-topics"
            ></StyledTextarea>
          </div>
          <div className="col d-flex flex-column mt-4 justify-content-center">
            <label className="text" for="teaching-methodology">
              Metodyka nauczania oraz platforma
            </label>
            <StyledTextarea
              className="align-self-center pl-2"
              name="teaching-methodology"
            ></StyledTextarea>
          </div>
        </div>
        <div className="row mt-5">
          <StyledBlueButton className="py-md-2 px-md-5">
            zgłoś zastępstwo
          </StyledBlueButton>
        </div>
      </Container>
    </div>
  );
};

// const mapStateToProps = (state) => ({

// })

// const mapDispatchToProps = {

// }

export default connect(null, {})(SubmitReplacement);

// Inner content should be limited by the inner padding of StyledBox
// TextArea and columns of flex content should be limited only by the inner padding of StyledBox
