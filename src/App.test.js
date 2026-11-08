import { render, screen } from '@testing-library/react';
import App from './App';

test('renders portfolio and accessible dark mode toggle button', () => {
  render(<App />);
  const toggleBtn = screen.getByRole('button', { name: /switch to (light|dark) mode/i });
  expect(toggleBtn).toBeInTheDocument();
  expect(toggleBtn).toHaveAttribute('aria-pressed');
});
