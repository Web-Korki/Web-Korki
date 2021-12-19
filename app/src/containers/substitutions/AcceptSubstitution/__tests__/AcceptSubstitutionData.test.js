import React from 'react';
import AcceptSubstitutionData from '../AcceptSubstitutionData';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

const testSubstitutionData = {
  id: 2008,
  old_teacher_fb: 'Leszek',
  new_teacher_fb: null,
  level_name: '2. klasa s.p.',
  subject_name: 'fizyka',
  datetime: '2022-01-12T10:00:00+01:00',
  new_teacher_found: false,
  last_topics: 'Pierwsze prawo dynamiki Newtona',
  planned_topics: 'Fizyka nieniutonowska',
  methodology_and_platform: 'rozwiązywanie zadań na google docs',
  old_teacher: 53,
  level: 2,
  subject: 5,
  new_teacher: 53,
};

const takeSubstitution = () => jest.fn();

const testSubstitutionDataFail = undefined;

describe('AcceptSubstitutionData', () => {
  describe('happy path', () => {
    it('displays the data provided in substitutionData object', () => {
      render(
        <AcceptSubstitutionData
          substitutionData={testSubstitutionData}
          takeSubstitution={takeSubstitution}
        />
      );

      expect(screen.getByText('2. klasa s.p.')).toBeInTheDocument();
      expect(
        screen.getByText('Pierwsze prawo dynamiki Newtona')
      ).toBeInTheDocument();
      expect(screen.getByText('Fizyka nieniutonowska')).toBeInTheDocument();
      expect(
        screen.getByText('rozwiązywanie zadań na google docs')
      ).toBeInTheDocument();
    });
  });

  describe('undefined properties of substitutionData', () => {
    it('should display callback values in TextFields', () => {
      render(
        <AcceptSubstitutionData
          substitutionData={testSubstitutionDataFail}
          takeSubstitution={takeSubstitution}
        />
      );

      expect(
        screen.getByText('Brak danych do wyświetlenia')
      ).toBeInTheDocument();

      expect(
        screen.getByText(
          'Może to być błąd przy pobieraniu danych z serwera. Odśwież stronę, by spróbować ponownie.'
        )
      ).toBeInTheDocument();
    });
  });
});
