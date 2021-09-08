import { BackButton } from '../../sharedComponents/containers/BackButton';
import { ContainerSmall } from '../../sharedComponents/styledComponents/index';
import { LectureAnalysisData } from './LectureAnalysisData';

export const LectureAnalysisDetail = (month) => {
  return (
    <>
      <div className="lectureAnalysisWrapper d-flex justify-content-center">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center mb-5">
            <div className="row">
              <BackButton className="col" />
              <h1 className="col title ml-2">Analiza - zajęcia</h1>
            </div>
            <h1 className="title">Marzec</h1>
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
