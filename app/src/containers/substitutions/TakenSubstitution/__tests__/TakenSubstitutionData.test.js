import React from 'react';
import TakenSubstitutionsData from '../TakenSubstitutionsData';
import { render, screen } from '@testing-library/react';

const testProps = {
  isSuperuser: false,
  takenSubstitutionsData: [
    {
      id: 2008,
      old_teacher_fb: 'Leszek',
      new_teacher_fb: 'Zbigniew_123',
      level_name: '2. klasa s.p.',
      subject_name: 'matematyka',
      datetime: '2022-03-12T10:00:00+01:00',
      new_teacher_found: true,
      last_topics: 'Wzory skróconego mnożenia',
      planned_topics: 'Całki podwójne',
      methodology_and_platform: 'rozwiązywanie zadań na google docs',
      old_teacher: 56,
      level: 2,
      subject: 5,
      new_teacher: 13,
    },
  ],
};

describe('renders TakenSubstitutionData', () => {
  describe('renders component without errors for regular user', () => {
    it('should render all the data without fb_name of new_teacher', () => {
      render(<TakenSubstitutionsData {...testProps} />);
      expect(screen.getByText('Leszek')).toBeInTheDocument();
      expect(screen.queryByText('Zbigniew_123')).not.toBeInTheDocument();
      expect(screen.getByText('matematyka')).toBeInTheDocument();
      expect(screen.getByText('Wzory skróconego mnożenia')).toBeInTheDocument();
      expect(screen.getByText('Całki podwójne')).toBeInTheDocument();
      expect(
        screen.getByText('rozwiązywanie zadań na google docs')
      ).toBeInTheDocument();
    });
    it('should render fallback layout for undefined data for regular user', () => {
      render(
        <TakenSubstitutionsData
          takenSubstitutionsData={undefined}
          isSuperuser={false}
        />
      );
      expect(screen.queryByText('Leszek')).not.toBeInTheDocument();
      expect(
        screen.getByText('Brak danych do wyświetlenia')
      ).toBeInTheDocument();
    });
  });
  describe('renders component without errors for regular user', () => {
    it('should render all the data with fb_name of new_teacher', () => {
      render(<TakenSubstitutionsData {...testProps} isSuperuser={true} />);
      expect(screen.getByText('Zbigniew_123')).toBeInTheDocument();
    });
    it('should render fallback layout for superuser in case takenSubstitutionsData is undefined', () => {
      render(
        <TakenSubstitutionsData
          isSuperuser={true}
          takenSubstitutionsData={undefined}
        />
      );
      expect(screen.queryByText('Zbigniew_123')).not.toBeInTheDocument();
      expect(
        screen.getByText('Brak danych do wyświetlenia')
      ).toBeInTheDocument();
    });
  });
});
