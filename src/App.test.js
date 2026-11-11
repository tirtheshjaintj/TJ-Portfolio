import { render, screen } from '@testing-library/react';
import App from './App';

test('renders dark mode toggle button with accessible label', () => {
  render(<App />);
  const modeButton = screen.getByRole('button', { name: /toggle dark mode/i });
  expect(modeButton).toBeInTheDocument();
});
