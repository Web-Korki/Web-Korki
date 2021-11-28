//subcomponents
import TakenSubstitutionsData from './TakenSubstitutionsData';
//utils
import { BackButton } from '../../../components/buttons/BackButton';

const TakenSubstitutions = () => {
  return (
    <div className="min-h-100 analysis d-flex flex-column justify-content-center align-items-center">
      <div className="container">
        <div className="d-flex justify-content-center flex-lg-row flex-column align-items-center mb-5">
          <div className="d-flex justify-content-between align-items-center mb-4 mb-lg-0">
            <BackButton />
            <h1 className="title">Przejęte zastępstwa: {4}</h1>
          </div>
        </div>
        <div className="limiter row g-4">
          <TakenSubstitutionsData />
          <TakenSubstitutionsData />
          <TakenSubstitutionsData />
          <TakenSubstitutionsData />
        </div>
      </div>
    </div>
  );
};

export default TakenSubstitutions;
