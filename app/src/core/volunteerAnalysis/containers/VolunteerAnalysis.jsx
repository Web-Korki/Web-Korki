import React from 'react';
import { StyledBoxMonths } from '../../sharedComponents/styledComponents/index';
import { BackButton } from '../../sharedComponents/containers/BackButton';

export const VolunteerAnalysis = () => {
  return (
    <>
      <div className="volunteerAnalysisWrapper d-flex align-items-center justify-content-center">
        <div className="container">
          <div className="d-flex justify-content-center align-items-center mb-5">
            <BackButton />
            <h1 className="title ml-2">Analiza - wolontariusze</h1>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-3 col-6 p-lg-2 p-1">
              <StyledBoxMonths month="september">Wrzesień</StyledBoxMonths>
            </div>
            <div className="col-lg-3 col-6 p-lg-2 p-1">
              <StyledBoxMonths>Październik</StyledBoxMonths>
            </div>
            <div className="col-lg-3 col-6 p-lg-2 p-1">
              <StyledBoxMonths>Listopad</StyledBoxMonths>
            </div>
            <div className="col-lg-3 col-6 p-lg-2 p-1">
              <StyledBoxMonths>Grudzień</StyledBoxMonths>
            </div>
            <div className="col-lg-3 col-6 p-lg-2 p-1">
              <StyledBoxMonths>Styczeń</StyledBoxMonths>
            </div>
            <div className="col-lg-3 col-6 p-lg-2 p-1">
              <StyledBoxMonths>Luty</StyledBoxMonths>
            </div>
            <div className="col-lg-3 col-6 p-lg-2 p-1">
              <StyledBoxMonths>Marzec</StyledBoxMonths>
            </div>
            <div className="col-lg-3 col-6 p-lg-2 p-1">
              <StyledBoxMonths>Kwiecień</StyledBoxMonths>
            </div>
            <div className="col-lg-3 col-6 p-lg-2 p-1">
              <StyledBoxMonths>Maj</StyledBoxMonths>
            </div>
            <div className="col-lg-3 col-6 p-lg-2 p-1">
              <StyledBoxMonths>Czerwiec</StyledBoxMonths>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
