import { StyledBoxMonths } from '../../sharedComponents/styledComponents/index';
import { BackButton } from '../../sharedComponents/containers/BackButton';
import { Link } from 'react-router-dom';

export const LectureAnalysis = () => {
  return (
    <>
      <div className="lectureAnalysisWrapper justify-content-center">
        <div className="container">
          <div className="d-flex justify-content-center align-items-center mb-5">
            <BackButton />
            <h1 className="title ml-2">Analiza - zajęcia</h1>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-3 col-6 p-lg-2 p-1">
              <Link to="/lecture_analysis/september">
                <StyledBoxMonths>Wrzesień</StyledBoxMonths>
              </Link>
            </div>
            <div className="col-lg-3 col-6 p-lg-2 p-1">
              <Link to="/lecture_analysis/october">
                <StyledBoxMonths>Październik</StyledBoxMonths>
              </Link>
            </div>
            <div className="col-lg-3 col-6 p-lg-2 p-1">
              <Link to="/lecture_analysis/november">
                <StyledBoxMonths>Listopad</StyledBoxMonths>
              </Link>
            </div>
            <div className="col-lg-3 col-6 p-lg-2 p-1">
              <Link to="/lecture_analysis/december">
                <StyledBoxMonths>Grudzień</StyledBoxMonths>
              </Link>
            </div>
            <div className="col-lg-3 col-6 p-lg-2 p-1">
              <Link to="/lecture_analysis/january">
                <StyledBoxMonths>Styczeń</StyledBoxMonths>
              </Link>
            </div>
            <div className="col-lg-3 col-6 p-lg-2 p-1">
              <Link to="/lecture_analysis/february">
                <StyledBoxMonths>Luty</StyledBoxMonths>
              </Link>
            </div>
            <div className="col-lg-3 col-6 p-lg-2 p-1">
              <Link to="/lecture_analysis/march">
                <StyledBoxMonths>Marzec</StyledBoxMonths>
              </Link>
            </div>
            <div className="col-lg-3 col-6 p-lg-2 p-1">
              <Link to="/lecture_analysis/april">
                <StyledBoxMonths>Kwiecień</StyledBoxMonths>
              </Link>
            </div>
            <div className="col-lg-3 col-6 p-lg-2 p-1">
              <Link to="/lecture_analysis/may">
                <StyledBoxMonths>Maj</StyledBoxMonths>
              </Link>
            </div>
            <div className="col-lg-3 col-6 p-lg-2 p-1">
              <Link to="/lecture_analysis/june">
                <StyledBoxMonths>Czerwiec</StyledBoxMonths>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
