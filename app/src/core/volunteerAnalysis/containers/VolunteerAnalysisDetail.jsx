import { BackButton } from '../../sharedComponents/containers/BackButton';
import { Container } from '../../sharedComponents/styledComponents/index';
import { VolunteerAnalysisData } from './VolunteerAnalysisData';

export const VolunteerAnalysisDetail = (month) => {
  return (
    <>
      <div className="volunteerAnalysisWrapper d-flex align-items-center justify-content-center">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center mb-5">
            <div className="row">
              <BackButton className="col" />
              <h1 className="col title ml-2">Analiza - wolontariusze</h1>
            </div>
            <h1 className="title">Marzec</h1>
          </div>
          <Container>
            <VolunteerAnalysisData month="" />
          </Container>
        </div>
      </div>
    </>
  );
};
