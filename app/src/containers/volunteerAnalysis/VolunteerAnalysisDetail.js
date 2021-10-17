import { BackButton } from "../../components/buttons/BackButton";
import { Container } from "../../components/styledComponents/index";
import { VolunteerAnalysisData } from "./VolunteerAnalysisData";
import { WhichMonthFunc } from "../../components/form/WhichMonthFunc";

export const VolunteerAnalysisDetail = (link) => {
  const link_prop = link.match.params.month;

  return (
    <>
      <div className="volunteerAnalysisWrapper d-flex align-items-center justify-content-center">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center mb-5">
            <div className="row">
              <BackButton className="col" />
              <h1 className="col title ml-2">Analiza - wolontariusze</h1>
            </div>
            <WhichMonthFunc month={link_prop} />
          </div>
          <Container>
            <VolunteerAnalysisData month="" />
          </Container>
        </div>
      </div>
    </>
  );
};
