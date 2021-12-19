// react
import React from 'react';
//rtl
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
//utils
import { UserMenu } from '../UserMenu';

const mockStore = {};
const testProps = {
  isSuperuser: true,
  hasChangedPassword: true,
};

const AppContext = React.createContext();

describe('UserMenu', () => {
  test('should render component for a teacher without error', () => {
    render(
      <AppContext.Provider store={mockStore}>
        <UserMenu {...testProps} />
      </AppContext.Provider>
    );
    expect(screen.getByText('Panel Korepetytora')).toBeInTheDocument();
  });
});
