import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('Renders Hi', () => {
  render(<App />);
  const welcomeElement = screen.getByText(/Hi/i);
  expect(welcomeElement).toBeInTheDocument();
});
