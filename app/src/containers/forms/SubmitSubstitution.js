import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
  Date,
  Textarea,
  BlueButton,
  Wrapper,
} from '../../components/styledComponents/index';
import { BackButton } from '../../components/buttons/BackButton';
import {
  get_classes,
  get_subjects,
} from '../../redux/actions/substitutionForm';
//propTypes
import PropTypes from 'prop-types';
import Select from 'react-select';
import Theme from '../../components/data/Theme';

// import Select, { StylesConfig } from 'react-select';

const SubmitSubstitution = ({ get_classes, get_subjects, formSelectData }) => {
  SubmitSubstitution.propTypes = {
    formSelectData: PropTypes.object.isRequired,
  };

  useEffect(() => {
    get_classes();
    get_subjects();
  }, []);

  const defaultFormSelectData = [{ value: '', label: '' }];

  return (
    <div className="min-h-100 py-5 py-xl-0 container-fluid container-xl d-flex flex-column justify-content-center align-items-center">
      <Wrapper>
        <div class="d-flex mb-2 mb-xl-5">
          <BackButton />
          <h1 className="title">Formularz zgłaszania zastępstwa</h1>
        </div>
        <form className="w-100 d-flex flex-column p-4 mb-3">
          <div className="row mb-4">
            <div className="col-12 col-xl-4 d-flex justify-content-center flex-column mb-4 mb-xl-0">
              <label className="text" for="class">
                Klasa
              </label>
              <Select
                className="text-select"
                placeholder="Wybierz klasę"
                theme={Theme}
                name="faculty"
                options={
                  formSelectData.faculties
                    ? formSelectData.faculties.map((e) => {
                        return {
                          value: e.id,
                          label: e.name,
                        };
                      })
                    : defaultFormSelectData
                }
              />
            </div>
            <div className="col-12 col-xl-4 d-flex justify-content-center flex-column mb-4 mb-xl-0">
              <label for="date" className="text">
                Data
              </label>
              <div className="d-flex justify-content-center">
                <Date
                  className="d-flex justify-content-center"
                  type="datetime-local"
                  id="date"
                  required
                />
              </div>
            </div>
            <div className="col-12 col-xl-4 d-flex justify-content-center flex-column">
              <label className="text" for="subject">
                Przedmiot
              </label>
              <Select
                className="text-select"
                placeholder="Wybierz przedmiot"
                theme={Theme}
                name="subject"
                options={
                  formSelectData.subjects
                    ? formSelectData.subjects.map((e) => {
                        return {
                          value: e.id,
                          label: e.name,
                        };
                      })
                    : defaultFormSelectData
                }
              />
            </div>
          </div>
          <div className="col d-flex flex-column justify-content-center">
            <label className="text" for="last-topics">
              Ostatnio przerabiane zagadnienia
            </label>
            <Textarea
              className="align-self-center ps-4"
              name="previous-topic"
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
        </form>
        <BlueButton>zgłoś zastępstwo</BlueButton>
      </Wrapper>
    </div>
  );
};

const mapStateToProps = (state) => ({
  formSelectData: state.substitutionForm,
});

const mapDispatchToProps = { get_classes, get_subjects };

export default connect(mapStateToProps, mapDispatchToProps)(SubmitSubstitution);
