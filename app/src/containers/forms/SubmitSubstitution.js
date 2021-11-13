import React from 'react';
import { connect } from 'react-redux';
import {
  Date,
  Textarea,
  BlueButton,
  Wrapper,
} from '../../components/styledComponents/index';
import { BackButton } from '../../components/buttons/BackButton';
import { SelectField } from '../../components/components/SelectField';

export const SubmitSubstitution = () => {
  return (
    <div className="min-h-100 py-5 py-xl-0 container-fluid container-xl d-flex flex-column justify-content-center align-items-center">
      <Wrapper>
        <div class="d-flex mb-2 mb-xl-5">
          <BackButton />
          <h1 className="title">Formularz zgłaszania zastępstwa</h1>
        </div>
        <div className="d-flex flex-column p-4 mb-4">
          <div className="row mb-4">
            <div className="col-12 col-xl-4 d-flex justify-content-center flex-column mb-4 mb-xl-0">
              <label className="text" for="class">
                Klasa
              </label>
              <SelectField
                id="class"
                required
                options={[
                  //przykład wyboru
                  { value: '', name: '--Wybierz opcję--' },
                  { value: '1pod', name: '1 szkoły podstawowej' },
                  { value: '3lic', name: '3 liceum' },
                ]}
              />
            </div>
            <div className="col-12 col-xl-4 d-flex justify-content-center flex-column mb-4 mb-xl-0">
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
            <div className="col-12 col-xl-4 d-flex justify-content-center flex-column">
              <label className="text" for="subject">
                Przedmiot
              </label>
              <SelectField
                id="subject"
                required
                options={[
                  //przykład wyboru
                  { value: '', name: '--Wybierz opcję--' },
                  { value: 'j.pol', name: 'Język polski' },
                  { value: 'mat', name: 'Matematyka' },
                ]}
              />
            </div>
          </div>
          <div className="col d-flex flex-column justify-content-center">
            <label className="text" for="last-topics">
              Ostatnio przerabiane zagadnienia
            </label>
            <Textarea
              className="align-self-center ps-4"
              name="last-topics"
              placeholder="Temat ostatniej lekcji to..."
            ></Textarea>
          </div>
          <div className="col d-flex flex-column mt-4 justify-content-center">
            <label className="text" for="planned-topics">
              Planowane zagadnienia na lekcję
            </label>
            <Textarea
              className="align-self-center ps-4"
              name="planned-topics"
              placeholder="Temat przyszłej lekcji to..."
            ></Textarea>
          </div>
          <div className="col d-flex flex-column mt-4 justify-content-center">
            <label className="text" for="teaching-methodology">
              Metodyka nauczania oraz platforma
            </label>
            <Textarea
              className="align-self-center ps-4"
              name="teaching-methodology"
              placeholder="Z uczniem pracujemy korzystając z..."
            ></Textarea>
          </div>
        </div>
        <BlueButton>zgłoś zastępstwo</BlueButton>
      </Wrapper>
    </div>
  );
};

// const mapStateToProps = (state) => ({

// })

// const mapDispatchToProps = {

// }

export default connect(null, {})(SubmitSubstitution);

// Inner content should be limited by the inner padding of StyledBox
// TextArea and columns of flex content should be limited only by the inner padding of StyledBox
