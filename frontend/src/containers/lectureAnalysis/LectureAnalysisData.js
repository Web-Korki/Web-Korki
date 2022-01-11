import {
  TextField,
  ContainerSmall,
} from '../../components/styledComponents/index';

export const LectureAnalysisData = (month) => {
  return (
    <div className="col">
      <ContainerSmall>
        <p className="text text-center">Dom dziecka w [name]</p>
        <div className="row g-4">
          <div className="d-flex justify-content-between align-items-center">
            <p className="text m-0">Ilość zaplanowanych lekcji</p>
            <TextField>132</TextField>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <p className="text m-0">Ilość przeprowadzonych lekcji</p>
            <TextField>128</TextField>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <p className="text m-0">Ilość nieodbytych lekcji</p>
            <TextField>4</TextField>
          </div>
        </div>
        <div className="mt-3">
          <p className="text">Nieodbyte lekcje:</p>
          <div className="row row-cols-2 g-4">
            <div className="col">
              <p className="text">Data:</p>
              <TextField className="text-center">11.03 12:00</TextField>
            </div>
            <div className="col">
              <p className="text">Powód:</p>
              <TextField>Odwołane przez</TextField>
            </div>
            <div className="col">
              <p className="text col">Data:</p>
              <TextField className="text-center">13.03 16:00</TextField>
            </div>
            <div className="col">
              <p className="text">Powód:</p>
              <TextField>Odwołane przez</TextField>
            </div>
          </div>
        </div>
      </ContainerSmall>
    </div>
  );
};
