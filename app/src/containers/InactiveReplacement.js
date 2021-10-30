import React from "react";
import { Wrapper, BlueButton } from "../components/styledComponents/index";
import { BackButton } from "../components/buttons/BackButton";
import { Link } from "react-router-dom";

export const InactiveReplacement = () => {
  return (
    <div className="min-h-100 py-5 py-xl-0 d-flex flex-column justify-content-center align-items-center">
      <div className="d-flex justify-content-center mb-5">
        <BackButton />
        <h1 className="title">Przepraszamy</h1>
      </div>
      <Wrapper>
        <p className="text mb-3">Zastępstwo nieaktywne</p>
        <Link to="/login_form">
          <BlueButton>zaloguj się</BlueButton>
        </Link>
      </Wrapper>
    </div>
  );
};
