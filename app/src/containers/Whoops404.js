import React from 'react';
import { useHistory } from 'react-router-dom';
import { StyledGreyButton } from '../components/styledComponents/index';
import { BookImage } from '../components/layout/BookImage';

export function Whoops404() {
  const history = useHistory();

  const goBack = () => {
    history.goBack();
  };

  return (
    <div className="d-flex justify-content-center align-items-center flex-column scalable-wrapper Whoops404">
      <h1 className="title mb-3">Przepraszamy</h1>
      <BookImage />
      <p>Żądana strona nie istnieje :/</p>
      <StyledGreyButton onClick={() => goBack()}>Go back</StyledGreyButton>
    </div>
  );
}
