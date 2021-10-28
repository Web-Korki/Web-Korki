import React from 'react';
import { connect } from 'react-redux';
import {
  Date,
  Textarea,
  BlueButton,
  Wrapper,
} from '../../components/styledComponents/index';
import { BackButton } from '../../components/buttons/BackButton';
import Select from '../../components/components/Select';

export const SubmitReplacement = () => {
  return (
    <div className="min-h-100 container-fluid container-lg py-5 py-lg-0 d-flex flex-column justify-content-center align-items-center">
      <Wrapper>
        <div class="d-flex mb-2 mb-lg-5">
          <BackButton />
          <h1 className="title">Formularz zgłaszania zastępstwa</h1>
        </div>
        <div className="row g-0 justify-content-center">
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
                <Date
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
            <Textarea
              className="align-self-center pl-2"
              name="last-topics"
            ></Textarea>
          </div>
          <div className="col d-flex flex-column mt-4 justify-content-center">
            <label className="text" for="planned-topics">
              Planowane zagadnienia na lekcję
            </label>
            <Textarea
              className="align-self-center pl-2"
              name="planned-topics"
            ></Textarea>
          </div>
          <div className="col d-flex flex-column mt-4 justify-content-center">
            <label className="text" for="teaching-methodology">
              Metodyka nauczania oraz platforma
            </label>
            <Textarea
              className="align-self-center pl-2"
              name="teaching-methodology"
            ></Textarea>
          </div>
        </div>
        <div className="row mt-5">
          <BlueButton>zgłoś zastępstwo</BlueButton>
        </div>
      </Wrapper>
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
