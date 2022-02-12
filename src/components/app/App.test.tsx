import { render, screen } from '@testing-library/react';
import App from './App';

test('Renders Hi', () => {
  render(<App />);
  const welcomeElement = screen.getAllByText(/Hi/i);
  welcomeElement.forEach(element => expect(element).toBeInTheDocument());
});
