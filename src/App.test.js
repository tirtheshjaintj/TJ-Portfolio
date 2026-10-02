import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Tirthesh Jain brand name', () => {
  render(<App />);
  const nameElements = screen.getAllByText(/Tirthesh Jain/i);
  expect(nameElements.length).toBeGreaterThan(0);
});
