import { StyledVolunteerRegister } from '../styledComponents/index';
import { BackButton } from '../../backButton/containers/BackButton';

export const VolunteerRegister = () => {
  return (
    <>
      <div className="volunteerRegisterWrapper d-flex align-items-center justify-content-center">
        <div className="row">
          <div className="d-flex justify-content-center mb-5">
            <BackButton></BackButton>
            <div className="col-auto p-0 menu-text volunteerRegisterTitle justify-content-end">
              Zarejestruj korepetytora
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <div>
              <StyledVolunteerRegister></StyledVolunteerRegister>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
