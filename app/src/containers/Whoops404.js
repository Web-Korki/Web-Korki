import React from 'react';
import { useHistory } from 'react-router-dom';
import { GreyButton } from '../components/styledComponents/index';
import { BookImage } from '../components/layout/BookImage';

export function Whoops404() {
  const history = useHistory();

  const goBack = () => {
    history.goBack();
  };

  return (
    <div className="min-h-100 d-flex justify-content-center align-items-center flex-column scalable-wrapper">
      <h1 className="title mb-3">Przepraszamy</h1>
      <BookImage />
      <p className="text">Żądana strona nie istnieje :/</p>
      <GreyButton onClick={() => goBack()}>wróć</GreyButton>
    </div>
  );
}
