import { BackButton } from '../../components/buttons/BackButton';
import { AwaitingSubstitutionData } from './AwaitingSubstitutionData';

export const AwaitingSubstitutions = () => {
  return (
    <div className="min-h-100 analysis d-flex flex-column justify-content-center align-items-center">
      <div className="container">
        <div className="d-flex justify-content-center flex-lg-row flex-column align-items-center mb-5">
          <div className="d-flex justify-content-between align-items-center mb-4 mb-lg-0">
            <BackButton />
            <h1 className="title">Oczekujące zastępstwa: {4}</h1>
          </div>
        </div>
        <div className="limiter row g-4">
          <AwaitingSubstitutionData />
          <AwaitingSubstitutionData />
          <AwaitingSubstitutionData />
          <AwaitingSubstitutionData />
        </div>
      </div>
    </div>
  );
};
