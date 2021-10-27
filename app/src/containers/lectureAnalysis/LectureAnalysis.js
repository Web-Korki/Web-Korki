import { BoxMonths } from '../../components/styledComponents/index';
import { BackButton } from '../../components/buttons/BackButton';
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
                <BoxMonths>Wrzesień</BoxMonths>
              </Link>
            </div>
            <div className="col-lg-3 col-6 p-lg-2 p-1">
              <Link to="/lecture_analysis/october">
                <BoxMonths>Październik</BoxMonths>
              </Link>
            </div>
            <div className="col-lg-3 col-6 p-lg-2 p-1">
              <Link to="/lecture_analysis/november">
                <BoxMonths>Listopad</BoxMonths>
              </Link>
            </div>
            <div className="col-lg-3 col-6 p-lg-2 p-1">
              <Link to="/lecture_analysis/december">
                <BoxMonths>Grudzień</BoxMonths>
              </Link>
            </div>
            <div className="col-lg-3 col-6 p-lg-2 p-1">
              <Link to="/lecture_analysis/january">
                <BoxMonths>Styczeń</BoxMonths>
              </Link>
            </div>
            <div className="col-lg-3 col-6 p-lg-2 p-1">
              <Link to="/lecture_analysis/february">
                <BoxMonths>Luty</BoxMonths>
              </Link>
            </div>
            <div className="col-lg-3 col-6 p-lg-2 p-1">
              <Link to="/lecture_analysis/march">
                <BoxMonths>Marzec</BoxMonths>
              </Link>
            </div>
            <div className="col-lg-3 col-6 p-lg-2 p-1">
              <Link to="/lecture_analysis/april">
                <BoxMonths>Kwiecień</BoxMonths>
              </Link>
            </div>
            <div className="col-lg-3 col-6 p-lg-2 p-1">
              <Link to="/lecture_analysis/may">
                <BoxMonths>Maj</BoxMonths>
              </Link>
            </div>
            <div className="col-lg-3 col-6 p-lg-2 p-1">
              <Link to="/lecture_analysis/june">
                <BoxMonths>Czerwiec</BoxMonths>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
