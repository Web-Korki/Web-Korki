import { BackButton } from '../../components/buttons/BackButton';
import { ContainerSmall } from '../../components/styledComponents/index';
import { LectureAnalysisData } from './LectureAnalysisData';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { WhichMonthFunc } from '../../components/form/WhichMonthFunc';

export const LectureAnalysisDetail = (link) => {
  const link_prop = link.match.params.month;

  // const baseURL = 'https://web-korki.edu.pl';
  // const token = localStorage.getItem('token');
  // const config = {
  //   headers: {
  //     'Content-Type': 'application/json',
  //     Authorization: `Token ${token}`,
  //   },
  // };

  // const getHouses = async () => {
  //   const houses = await axios
  //     .get(`${baseURL}/api/houses`, config)
  //     .then((response) => {
  //       console.log(response);
  //     })
  //     .catch((err) => console.log('Error', err));
  // };

  // useEffect(() => {
  //   getHouses();
  // }, []);

  return (
    <>
      <div className="lectureAnalysisWrapper d-flex justify-content-center">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center mb-5">
            <div className="row">
              <BackButton className="col" />
              <h1 className="col title ml-2">Analiza - zajęcia</h1>
            </div>
            <WhichMonthFunc month={link_prop} />
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
