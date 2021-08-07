import React from 'react';
import { StyledBoxMonths } from '../../sharedComponents/styledComponents/index';

export const VolunteerAnalysis = () => {
  return (
    <>
      <div className="volunteerAnalysisWrapper d-flex align-items-center justify-content-center">
        <div className="container">
          <div className="d-flex justify-content-center align-items-center mb-5">
            <h1 className="title">Analiza - wolontariusze</h1>
          </div>
          <div className="row row-cols-4 justify-content-center">
            <div className="col p-0">
              <StyledBoxMonths>Wrzesień</StyledBoxMonths>
            </div>
            <div className="col p-0">
              <StyledBoxMonths>Październik</StyledBoxMonths>
            </div>
            <div className="col p-0">
              <StyledBoxMonths>Listopad</StyledBoxMonths>
            </div>
            <div className="col p-0">
              <StyledBoxMonths>Grudzień</StyledBoxMonths>
            </div>
            <div className="col p-0">
              <StyledBoxMonths>Styczeń</StyledBoxMonths>
            </div>
            <div className="col p-0">
              <StyledBoxMonths>Luty</StyledBoxMonths>
            </div>
            <div className="col p-0">
              <StyledBoxMonths>Marzec</StyledBoxMonths>
            </div>
            <div className="col p-0">
              <StyledBoxMonths>Kwiecień</StyledBoxMonths>
            </div>
            <div className="col p-0">
              <StyledBoxMonths>Maj</StyledBoxMonths>
            </div>
            <div className="col p-0">
              <StyledBoxMonths>Czerwiec</StyledBoxMonths>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
