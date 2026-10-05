import { render, screen } from '@testing-library/react';
import App from './App';

test('renders portfolio heading or brand name', () => {
  render(<App />);
  const brandElements = screen.getAllByText(/Tirthesh Jain/i);
  expect(brandElements.length).toBeGreaterThan(0);
});
