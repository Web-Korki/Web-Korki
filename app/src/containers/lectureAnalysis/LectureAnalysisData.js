import { TextField } from "../../components/styledComponents/index";

export const LectureAnalysisData = ({ month, title, done, canceled }) => {
  return (
    <>
      <h4 className="text-center">{title}</h4>
      <div className="row">
        <h4 className="col align-self-center">Ilość zaplanowanych lekcji</h4>
        <TextField className="col-2 text-center">
          132 {done + canceled}
        </TextField>
        <h4 className="col align-self-center">Ilość przeprowadzonych lekcji</h4>
        <TextField className="col-2 text-center">128 {done}</TextField>
        <h4 className="col align-self-center">Ilość nieodbytych lekcji</h4>
        <TextField className="col-2 text-center">4 {canceled}</TextField>
      </div>
      <div>
        <h4 className="">Nieodbyte lekcje</h4>
        <div className="row row-cols-2">
          <div className="col">
            <h4 className="col">Data</h4>
            <TextField className="col text-center">11.03 12:00</TextField>
          </div>
          <div className="col">
            <h4 className="col">Powód</h4>
            <TextField className="col">
              Coś więcej niż 4 Ty głupi debilu
            </TextField>
          </div>
          <div className="col">
            <h4 className="col">Data</h4>
            <TextField className="col text-center">13.03 16:00</TextField>
          </div>
          <div className="col">
            <h4 className="col">Powód</h4>
            <TextField className="col">W sumie to nie wiem</TextField>
          </div>
        </div>
      </div>
    </>
  );
};
