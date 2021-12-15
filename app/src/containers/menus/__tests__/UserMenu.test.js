// react
import React from 'react';
// test utils
import { render, waitFor, screen } from '@testing-library/react';
// isolated component
import { UserMenu } from '../UserMenu';

const testProps = {
  isSuperuser: false,
  hasChangedPassword: true,
};

// it should be rendered inside Router

describe('UserMenu', () => {
  describe('renders UserMenu after initial password has been changed', () => {
    it('should render UserMenu without error', () => {
      render(<UserMenu {...testProps} />);
    });
  });
});
