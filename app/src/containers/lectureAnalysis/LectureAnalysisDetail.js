import { BackButton } from '../../components/buttons/BackButton';
import { LectureAnalysisData } from './LectureAnalysisData';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { WhichMonthFunc } from '../../components/form/WhichMonthFunc';

export const LectureAnalysisDetail = (link) => {
  const link_prop = link.match.params.month;

  return (
    <div className="min-h-100 analysis d-flex flex-column justify-content-center align-items-center">
      <div className="container">
        <div className="d-flex justify-content-lg-between justify-content-center flex-lg-row flex-column align-items-center mb-5">
          <div className="d-flex justify-content-between align-items-center mb-4 mb-lg-0">
            <BackButton />
            <h1 className="title">Analiza - zajęcia</h1>
          </div>
          <WhichMonthFunc month={link_prop} />
        </div>
        <div className="limiter row row-cols-1 row-cols-lg-2 g-4">
          <LectureAnalysisData />
          <LectureAnalysisData />
          <LectureAnalysisData />
          <LectureAnalysisData />
          <LectureAnalysisData />
          <LectureAnalysisData />
        </div>
      </div>
    </div>
  );
};
