import React from 'react';
import { render, screen } from '@testing-library/react';
import Main from './Main';

test('renders greeting', () => {
  render(<Main />);
  const salutation = screen.getByText(/This is Miguel, a.k.a Urbi/i);
  expect(salutation).toBeInTheDocument();
});
