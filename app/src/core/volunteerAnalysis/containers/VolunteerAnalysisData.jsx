import { TextField } from '../styledComponents/index';

export const VolunteerAnalysisData = (month) => {
  return (
    <>
      <div>
        <h3>Korepetytor, który najczęściej potrzebował zastępstw</h3>
        <div className="row">
          {/* <div className="row col-6">
            <TextField className="col">Daniel Konnek</TextField>
            <TextField className="col-2 text-center">3</TextField>
          </div> */}
        </div>
      </div>
      <div>
        <h3>
          Korepetytorzy, którzy przeprowadzili wszystkie lekcje w miesiącu
        </h3>
        <div className="row">
          {/* <div className="row col-6">
            <TextField className="col">Daniel Konnek</TextField>
          </div> */}
        </div>
      </div>
      <div>
        <h3>Korepetytor, który przejął najwięcej zastępstw w miesiącu</h3>
        <div className="row">
          {/* <div className="row col-6">
            <TextField className="col">Daniel Konnek</TextField>
            <TextField className="col-2 text-center">3</TextField>
          </div> */}
        </div>
      </div>
    </>
  );
};
