import { render, screen } from '@testing-library/react';
import App from './App';

test('renders brand name in navigation', () => {
  render(<App />);
  const brandElements = screen.getAllByText(/Tirthesh Jain/i);
  expect(brandElements.length).toBeGreaterThan(0);
});
