import React from 'react';
import { StyledBoxLectureAnalysis } from '../../lectureAnalysis/styledComponents/index';

export const VolunteerAnalysis = () => {
  return (
    <>
      <div className="volunteerAnalysisWrapper d-flex align-items-center justify-content-center">
        <div className="volunteerAnalysisInnerWrapper">
          <div className="row">
            <div className="volunteerAnalysisTitle text-center col-12">
              <h1>Analiza - wolontariusze</h1>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col p-0">
              <StyledBoxLectureAnalysis>Wrzesień</StyledBoxLectureAnalysis>
            </div>
            <div className="col p-0">
              <StyledBoxLectureAnalysis>Październik</StyledBoxLectureAnalysis>
            </div>
            <div className="col p-0">
              <StyledBoxLectureAnalysis>Listopad</StyledBoxLectureAnalysis>
            </div>
            <div className="col p-0">
              <StyledBoxLectureAnalysis>Grudzień</StyledBoxLectureAnalysis>
            </div>
          </div>
          <div className="row">
            <div className="col p-0">
              <StyledBoxLectureAnalysis>Styczeń</StyledBoxLectureAnalysis>
            </div>
            <div className="col p-0">
              <StyledBoxLectureAnalysis>Luty</StyledBoxLectureAnalysis>
            </div>
            <div className="col p-0">
              <StyledBoxLectureAnalysis>Marzec</StyledBoxLectureAnalysis>
            </div>
            <div className="col p-0">
              <StyledBoxLectureAnalysis>Kwiecień</StyledBoxLectureAnalysis>
            </div>
          </div>
          <div className="row">
            <div className="col"></div>
            <div className="col p-0">
              <StyledBoxLectureAnalysis>Maj</StyledBoxLectureAnalysis>
            </div>
            <div className="col p-0">
              <StyledBoxLectureAnalysis>Czerwiec</StyledBoxLectureAnalysis>
            </div>
            <div className="col"></div>
          </div>
        </div>
      </div>
    </>
  );
};
