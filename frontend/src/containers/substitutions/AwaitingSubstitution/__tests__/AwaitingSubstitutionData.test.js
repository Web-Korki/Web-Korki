import React from 'react';
import { AwaitingSubstitutionData } from '../AwaitingSubstitutionData';
import { render, screen } from '@testing-library/react';

const testProps = {
  isSuperuser: false,
  takeSubstitution: jest.fn(),
  pendingSubstitutionsData: [
    {
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
    },
  ],
};

describe('AwaitingSubstitutionData', () => {
  describe('renders data without error for regular user', () => {
    it('renders component without error', () => {
      render(<AwaitingSubstitutionData {...testProps} />);
      expect(screen.queryByText('Leszek')).not.toBeInTheDocument(); // is not superuser
      expect(screen.getByText('fizyka')).toBeInTheDocument(); // it is rendered in lowercase, because no capitalize() function is provided
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
  describe('renders data without error for superuser', () => {
    it('renders old_teacher_fb_name', () => {
      render(<AwaitingSubstitutionData {...testProps} isSuperuser />);
      expect(screen.getByText('Leszek')).toBeInTheDocument();
    });
  });
  describe('pendingSubstitutionsData is undefined', () => {
    it('Should render fallback layout', () => {
      render(
        <AwaitingSubstitutionData
          takeSubstitution={jest.fn()}
          isSuperuser
          pendingSubstitutionsData={undefined}
        />
      );
      expect(
        screen.getByText('Brak danych do wyświetlenia')
      ).toBeInTheDocument();
    });
  });
});
