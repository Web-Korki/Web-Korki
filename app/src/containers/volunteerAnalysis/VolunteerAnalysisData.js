import { TextField, Container } from '../../components/styledComponents/index';

export const VolunteerAnalysisData = (month) => {
  return (
    <Container>
      <div className="row g-4">
        <p className="text">
          Korepetytorzy, którzy najczęściej potrzebowali zastępstw:
        </p>
        <div className="row row-cols-1 row-cols-lg-2 g-4 mt-0">
          <div className="d-flex justify-content-between">
            <TextField className="col me-4">Guma Halls</TextField>
            <TextField className="col-auto">69</TextField>
          </div>
        </div>
        <p className="text">
          Korepetytorzy, którzy przeprowadzili wszystkie lekcje w miesiącu:
        </p>
        <div className="row row-cols-1 row-cols-lg-2 g-4 mt-0">
          <div className="d-flex justify-content-center">
            <TextField className="col">Karyna Grażyna</TextField>
          </div>
        </div>
        <p className="text">
          Korepetytorzy, który przejęli najwięcej zastępstw w miesiącu:
        </p>
        <div className="row row-cols-1 row-cols-lg-2 g-4 mt-0">
          <div className="d-flex justify-content-between">
            <TextField className="col me-4">Papaj JP</TextField>
            <TextField className="col-auto">2137</TextField>
          </div>
        </div>
      </div>
    </Container>
  );
};
