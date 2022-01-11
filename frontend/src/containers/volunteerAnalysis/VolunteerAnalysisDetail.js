import { BackButton } from '../../components/buttons/BackButton';
import { VolunteerAnalysisData } from './VolunteerAnalysisData';
import { WhichMonthFunc } from '../../components/form/WhichMonthFunc';

// const baseURL = 'https://web-korki.edu.pl';

export const VolunteerAnalysisDetail = (link) => {
  const link_prop = link.match.params.month;
  return (
    <div className="min-h-100 analysis d-flex flex-column justify-content-center align-items-center">
      <div className="container">
        <div className="d-flex justify-content-lg-between justify-content-center flex-lg-row flex-column align-items-center mb-5">
          <div className="d-flex justify-content-between align-items-center mb-4 mb-lg-0">
            <BackButton />
            <h1 className="title">Analiza - wolontariusze</h1>
          </div>
          <WhichMonthFunc month={link_prop} />
        </div>
        <div className="limiter row g-4">
          <VolunteerAnalysisData month="" />
          <VolunteerAnalysisData month="" />
          <VolunteerAnalysisData month="" />
          <VolunteerAnalysisData month="" />
          <VolunteerAnalysisData month="" />
        </div>
      </div>
    </div>
  );
};
