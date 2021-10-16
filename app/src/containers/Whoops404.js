import React from 'react';
import { useHistory } from 'react-router-dom';
import { StyledGoBack } from '../components/styledComponents/index';
import { BookImage } from '../components/layout/BookImage';

export function Whoops404() {
  const history = useHistory();

  const goBack = () => {
    history.goBack();
  };

  return (
    <div className="d-flex justify-content-center align-items-center flex-column scalable-wrapper Whoops404">
      <h1>Sorry</h1>
      <div
        style={{
          height: '300px',
          width: '300px',
        }}
      >
        <BookImage />
      </div>
      <p>We can't find the page you are looking for :/</p>
      <StyledGoBack onClick={() => goBack()}>Go back</StyledGoBack>
    </div>
  );
}
