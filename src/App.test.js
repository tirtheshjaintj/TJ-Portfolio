import { render, screen } from '@testing-library/react';
import App from './App';

test('renders portfolio page with brand name', () => {
  render(<App />);
  const brandElements = screen.getAllByText(/Tirthesh Jain/i);
  expect(brandElements.length).toBeGreaterThan(0);
});
