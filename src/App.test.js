import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Tirthesh Jain in application', () => {
  render(<App />);
  const elements = screen.getAllByText(/Tirthesh Jain/i);
  expect(elements.length).toBeGreaterThan(0);
});
