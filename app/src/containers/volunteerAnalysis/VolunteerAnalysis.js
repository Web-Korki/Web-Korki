import { BoxMonths } from '../../components/styledComponents/index';
import { BackButton } from '../../components/buttons/BackButton';
import { Link } from 'react-router-dom';

export const VolunteerAnalysis = () => {
  return (
    <>
      <div className="min-h-100 py-5 py-lg-0 d-flex flex-column justify-content-center align-items-center">
        <div className="d-flex justify-content-center align-items-center mb-5">
          <BackButton />
          <h1 className="title">Analiza - wolontariusze</h1>
        </div>
        <div className="row g-0 justify-content-center p-3">
          <div className="col-lg-3 col-6 g-4 g-lg-5">
            <Link to="/volunteer_analysis/september">
              <BoxMonths>Wrzesień</BoxMonths>
            </Link>
          </div>
          <div className="col-lg-3 col-6 g-4 g-lg-5">
            <Link to="/volunteer_analysis/october">
              <BoxMonths>Październik</BoxMonths>
            </Link>
          </div>
          <div className="col-lg-3 col-6 g-4 g-lg-5">
            <Link to="/volunteer_analysis/november">
              <BoxMonths>Listopad</BoxMonths>
            </Link>
          </div>
          <div className="col-lg-3 col-6 g-4 g-lg-5">
            <Link to="/volunteer_analysis/december">
              <BoxMonths>Grudzień</BoxMonths>
            </Link>
          </div>
          <div className="col-lg-3 col-6 g-4 g-lg-5">
            <Link to="/volunteer_analysis/january">
              <BoxMonths>Styczeń</BoxMonths>
            </Link>
          </div>
          <div className="col-lg-3 col-6 g-4 g-lg-5">
            <Link to="/volunteer_analysis/february">
              <BoxMonths>Luty</BoxMonths>
            </Link>
          </div>
          <div className="col-lg-3 col-6 g-4 g-lg-5">
            <Link to="/volunteer_analysis/march">
              <BoxMonths>Marzec</BoxMonths>
            </Link>
          </div>
          <div className="col-lg-3 col-6 g-4 g-lg-5">
            <Link to="/volunteer_analysis/april">
              <BoxMonths>Kwiecień</BoxMonths>
            </Link>
          </div>
          <div className="col-lg-3 col-6 g-4 g-lg-5">
            <Link to="/volunteer_analysis/may">
              <BoxMonths>Maj</BoxMonths>
            </Link>
          </div>
          <div className="col-lg-3 col-6 g-4 g-lg-5">
            <Link to="/volunteer_analysis/june">
              <BoxMonths>Czerwiec</BoxMonths>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
