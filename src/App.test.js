import { render, screen } from '@testing-library/react';
import App from './App';

test('renders toggle dark mode button', () => {
  render(<App />);
  const toggleBtn = screen.getByRole('button', { name: /toggle dark mode/i });
  expect(toggleBtn).toBeInTheDocument();
});
