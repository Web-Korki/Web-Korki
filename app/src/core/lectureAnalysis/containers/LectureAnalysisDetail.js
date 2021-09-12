import { BackButton } from '../../sharedComponents/containers/BackButton';
import { ContainerSmall } from '../../sharedComponents/styledComponents/index';
import { LectureAnalysisData } from './LectureAnalysisData';
import { useEffect, useState } from 'react';
import axios from 'axios';

export const LectureAnalysisDetail = (link) => {
  const link_prop = link.match.params.month;
  let month;
  switch (link_prop) {
    case 'january':
      month = 'Styczeń';
      break;
    case 'february':
      month = 'Luty';
      break;
    case 'march':
      month = 'Marzec';
      break;
    case 'april':
      month = 'Kwiecień';
      break;
    case 'may':
      month = 'Maj';
      break;
    case 'june':
      month = 'Czerwiec';
      break;
    case 'september':
      month = 'Wrzesień';
      break;
    case 'october':
      month = 'Październik';
      break;
    case 'november':
      month = 'Listopad';
      break;
    case 'december':
      month = 'Grudzień';
      break;
    default:
      month = 'Miesiąc nieznany';
  }

  const baseURL = 'https://web-korki.edu.pl';
  const token = localStorage.getItem('token');
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Token ${token}`,
    },
  };

  const getHouses = async () => {
    await axios.get(`${baseURL}/api/houses`, config);
  };

  useEffect(() => {
    getHouses();
  }, {});

  return (
    <>
      <div className="lectureAnalysisWrapper d-flex justify-content-center">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center mb-5">
            <div className="row">
              <BackButton className="col" />
              <h1 className="col title ml-2">Analiza - zajęcia</h1>
            </div>
            <h1 className="title">{month}</h1>
          </div>
          <div className="card-columns" style={{ columnCount: 2 }}>
            <ContainerSmall className="card mb-3">
              <LectureAnalysisData />
            </ContainerSmall>
            <ContainerSmall className="card mb-3">
              <LectureAnalysisData />
            </ContainerSmall>
            <ContainerSmall className="card mb-3">
              <LectureAnalysisData />
            </ContainerSmall>
            <ContainerSmall className="card mb-3">
              <LectureAnalysisData />
            </ContainerSmall>
            <ContainerSmall className="card mb-3">
              <LectureAnalysisData />
            </ContainerSmall>
            <ContainerSmall className="card mb-3">
              <LectureAnalysisData />
            </ContainerSmall>
          </div>
        </div>
      </div>
    </>
  );
};
