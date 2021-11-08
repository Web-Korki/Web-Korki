import { BoxMonths } from "../../components/styledComponents/index";
import { BackButton } from "../../components/buttons/BackButton";
import { Link } from "react-router-dom";

export const LectureAnalysis = () => {
  return (
    <div className="min-h-100 py-5 py-lg-0 d-flex flex-column justify-content-center align-items-center">
      <div className="d-flex justify-content-center align-items-center mb-5">
        <BackButton />
        <h1 className="title">Analiza - zajęcia</h1>
      </div>
      <div className="row g-0 justify-content-center p-3">
        <div className="col-xl-3 col-md-4 col-6 g-4 g-xl-5">
          <Link to="/lecture_analysis/september">
            <BoxMonths>Wrzesień</BoxMonths>
          </Link>
        </div>
        <div className="col-xl-3 col-md-4 col-6 g-4 g-xl-5">
          <Link to="/lecture_analysis/october">
            <BoxMonths>Październik</BoxMonths>
          </Link>
        </div>
        <div className="col-xl-3 col-md-4 col-6 g-4 g-xl-5">
          <Link to="/lecture_analysis/november">
            <BoxMonths>Listopad</BoxMonths>
          </Link>
        </div>
        <div className="col-xl-3 col-md-4 col-6 g-4 g-xl-5">
          <Link to="/lecture_analysis/december">
            <BoxMonths>Grudzień</BoxMonths>
          </Link>
        </div>
        <div className="col-xl-3 col-md-4 col-6 g-4 g-xl-5">
          <Link to="/lecture_analysis/january">
            <BoxMonths>Styczeń</BoxMonths>
          </Link>
        </div>
        <div className="col-xl-3 col-md-4 col-6 g-4 g-xl-5">
          <Link to="/lecture_analysis/february">
            <BoxMonths>Luty</BoxMonths>
          </Link>
        </div>
        <div className="col-xl-3 col-md-4 col-6 g-4 g-xl-5">
          <Link to="/lecture_analysis/march">
            <BoxMonths>Marzec</BoxMonths>
          </Link>
        </div>
        <div className="col-xl-3 col-md-4 col-6 g-4 g-xl-5">
          <Link to="/lecture_analysis/april">
            <BoxMonths>Kwiecień</BoxMonths>
          </Link>
        </div>
        <div className="col-xl-3 col-md-4 col-6 g-4 g-xl-5">
          <Link to="/lecture_analysis/may">
            <BoxMonths>Maj</BoxMonths>
          </Link>
        </div>
        <div className="col-xl-3 col-md-4 col-6 g-4 g-xl-5">
          <Link to="/lecture_analysis/june">
            <BoxMonths>Czerwiec</BoxMonths>
          </Link>
        </div>
      </div>
    </div>
  );
};
