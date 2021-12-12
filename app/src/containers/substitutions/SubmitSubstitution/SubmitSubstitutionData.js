import React, { useEffect, useState } from 'react';
import {
  Date,
  Textarea,
  BlueButton,
  Wrapper,
} from '../../../components/styledComponents/index';
import { BackButton } from '../../../components/buttons/BackButton';
//propTypes
import PropTypes from 'prop-types';
import Select from 'react-select';
import Theme from '../../../components/data/Theme';

const SubmitSubstitutionData = ({
  levels,
  subjects,
  getLevels,
  getSubjects,
  createSubstitution,
}) => {
  SubmitSubstitutionData.propTypes = {
    getLevels: PropTypes.func.isRequired,
    getSubjects: PropTypes.func.isRequired,
    formSelectData: PropTypes.object.isRequired,
    createSubstitution: PropTypes.func.isRequired,
  };

  useEffect(() => {
    getLevels();
    getSubjects();
  }, []);

  const [formData, setFormData] = useState({
    level: '',
    subject: '',
    datetime: '',
    last_topics: '',
    planned_topics: '',
    methodology_and_platform: '',
  });

  const {
    level,
    subject,
    datetime,
    last_topics,
    planned_topics,
    methodology_and_platform,
  } = formData;

  const onChange = (e) => {
    if (e.target === undefined) {
      if (/^([a-z]|[A-Z])/g.test(e.label))
        setFormData({ ...formData, subject: e.label });
      if (!/^([a-z]|[A-Z])/g.test(e.label))
        setFormData({ ...formData, level: e.label });
    } else {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log('called');
    createSubstitution(formData);
  };

  console.log(formData);

  const defaultFormSelectData = [{ value: '', label: '' }];

  return (
    <div className="min-h-100 py-5 py-xl-0 container-fluid container-xl d-flex flex-column justify-content-center align-items-center submit-substitution-data">
      <Wrapper>
        <div class="d-flex mb-2 mb-xl-5">
          <BackButton />
          <h1 className="title">Formularz zgłaszania zastępstwa</h1>
        </div>
        <form
          className="w-100 d-flex flex-column p-4 mb-3"
          onSubmit={(e) => onSubmit(e)}
        >
          <div className="row mb-4">
            <div className="col-12 col-xl-4 d-flex justify-content-center flex-column mb-4 mb-xl-0">
              <label className="text" for="class">
                Klasa
              </label>
              <Select
                className="text-select"
                placeholder="Wybierz klasę"
                theme={Theme}
                name="level"
                options={
                  levels
                    ? levels.map((e) => {
                        return {
                          value: e.id,
                          label: e.name,
                        };
                      })
                    : defaultFormSelectData
                }
                onChange={(e) => {
                  onChange(e);
                }}
                required
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
                  name="datetime"
                  value={datetime}
                  onChange={(e) => onChange(e)}
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
                  subjects
                    ? subjects.map((e) => {
                        return {
                          value: e.id,
                          label: e.name,
                        };
                      })
                    : defaultFormSelectData
                }
                onChange={(e) => {
                  onChange(e);
                }}
                required
              />
            </div>
          </div>
          <div className="col d-flex flex-column justify-content-center">
            <label className="text" for="last_topics">
              Ostatnio przerabiane zagadnienia
            </label>
            <Textarea
              className="align-self-center ps-4"
              name="last_topics"
              value={last_topics}
              onChange={(e) => onChange(e)}
              placeholder="Temat ostatniej lekcji to..."
              required
            ></Textarea>
          </div>
          <div className="col d-flex flex-column mt-4 justify-content-center">
            <label className="text" for="planned_topics">
              Planowane zagadnienia na lekcję
            </label>
            <Textarea
              className="align-self-center ps-4"
              name="planned_topics"
              value={planned_topics}
              onChange={(e) => onChange(e)}
              placeholder="Temat przyszłej lekcji to..."
              required
            ></Textarea>
          </div>
          <div className="col d-flex flex-column mt-4 justify-content-center">
            <label className="text" for="methodology_and_platform">
              Metodyka nauczania oraz platforma
            </label>
            <Textarea
              className="align-self-center ps-4"
              name="methodology_and_platform"
              value={methodology_and_platform}
              onChange={(e) => onChange(e)}
              placeholder="Z uczniem pracujemy korzystając z..."
              required
            ></Textarea>
          </div>
          <BlueButton className="mt-5 submit-button" type="submit">
            zgłoś zastępstwo
          </BlueButton>
        </form>
      </Wrapper>
    </div>
  );
};

export default SubmitSubstitutionData;
