//react
import React from 'react';
//redux

//rtl
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
//utils
import UserMenu from '../UserMenu';

describe('UserMenu', () => {
  test('should render component for a teacher without error', () => {
    render(<UserMenu isSuperuser />);
    expect(screen.getByText('Panel Korepetytora')).toBeInTheDocument();
  });
});
