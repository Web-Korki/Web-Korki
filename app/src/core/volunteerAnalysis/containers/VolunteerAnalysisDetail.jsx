import { BackButton } from '../../sharedComponents/containers/BackButton';
import { Container } from '../../sharedComponents/styledComponents/index';
import { VolunteerAnalysisData } from './VolunteerAnalysisData';
import { WhichMonthFunc } from '../../sharedComponents/containers/WhichMonthFunc';

const baseURL = 'http://nujgoiz.cluster024.hosting.ovh.net';

export const VolunteerAnalysisDetail = (link) => {
  const link_prop = link.match.params.month;
  return (
    <>
      <div className="volunteerAnalysisWrapper d-flex align-items-center justify-content-center">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center mb-5">
            <div className="row">
              <BackButton className="col" />
              <h1 className="col title ml-2">Analiza - wolontariusze</h1>
            </div>
            <WhichMonthFunc month={link_prop} />
          </div>
          <Container>
            <VolunteerAnalysisData month="" />
          </Container>
        </div>
      </div>
    </>
  );
};
