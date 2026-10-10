import { render, screen } from '@testing-library/react';
import App from './App';

test('renders portfolio heading and dark mode button with aria-label', () => {
  render(<App />);
  const brandElements = screen.getAllByText(/Tirthesh Jain/i);
  expect(brandElements.length).toBeGreaterThan(0);

  const darkModeBtn = screen.getByRole('button', { name: /toggle dark mode/i });
  expect(darkModeBtn).toBeInTheDocument();
});
