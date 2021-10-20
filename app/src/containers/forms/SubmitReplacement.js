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
    <div className="d-flex justify-content-center align-items-center flex-column submitReplacement">
      <Container className="d-flex align-items-center flex-column submitReplacementContainer">
        <div class="d-flex mb-5">
          <BackButton />
          <h1 className="title ml-2">Formularz zgłaszania zastępstwa</h1>
        </div>
        <div className="row justify-content-center">
          <div className="row">
            <div className="col d-flex justify-content-center flex-column mt-4">
              <label for="class">Klasa</label>
              <Select id="class" required>
                {/* option tag rendered conditi */}
              </Select>
            </div>
            <div className="col d-flex justify-content-center flex-column mt-4">
              <label for="date" className="mb-2">
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
              <label for="subject">Przedmiot</label>
              <Select id="subject" required>
                {/* option tag rendered conditi */}
              </Select>
            </div>
          </div>

          <div className="row d-flex flex-column mt-4 justify-content-center">
            <label for="last-topics">Ostatnio przerabiane zagadnienia</label>
            <StyledTextarea name="last-topics"></StyledTextarea>
          </div>
          <div className="row d-flex flex-column mt-4 justify-content-center">
            <label for="planned-topics">Planowane zagadnienia na lekcję</label>
            <StyledTextarea name="planned-topics"></StyledTextarea>
          </div>
          <div className="row d-flex flex-column mt-4 justify-content-center">
            <label for="teaching-methodology">
              Metodyka nauczania oraz platforma
            </label>
            <StyledTextarea name="teaching-methodology"></StyledTextarea>
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
