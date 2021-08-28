import React from 'react';
import { BackButton } from '../../sharedComponents/containers/BackButton';
import { Container } from '../../sharedComponents/styledComponents/index';

export const VolunteerAnalysisDetail = () => {
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
            <h3>Korepetytor, który najczęściej potrzebował zastępstw</h3>
          </Container>
        </div>
      </div>
    </>
  );
};
