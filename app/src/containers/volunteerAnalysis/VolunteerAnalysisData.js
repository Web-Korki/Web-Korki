import { TextField, Container } from '../../components/styledComponents/index';

export const VolunteerAnalysisData = (month) => {
  return (
    <Container>
      <div className="row g-4">
        <p className="text">
          Korepetytorzy, którzy najczęściej potrzebowali zastępstw:
        </p>
        <div className="row row-cols-2 g-4 mt-0">
          <div className="d-flex justify-content-between">
            <TextField>Guma Halls</TextField>
            <TextField>69</TextField>
          </div>
        </div>
        <p className="text">
          Korepetytorzy, którzy przeprowadzili wszystkie lekcje w miesiącu:
        </p>
        <div className="row row-cols-2 g-4 mt-0">
          <div className="d-flex justify-content-center">
            <TextField>Karyna Grażyna</TextField>
          </div>
        </div>
        <p className="text">
          Korepetytorzy, który przejęli najwięcej zastępstw w miesiącu:
        </p>
        <div className="row row-cols-2 g-4 mt-0">
          <div className="d-flex justify-content-between">
            <TextField>Papaj JP</TextField>
            <TextField>2137</TextField>
          </div>
        </div>
      </div>
    </Container>
  );
};
