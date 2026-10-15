import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Tirthesh Jain portfolio branding and accessible theme toggle button', () => {
  render(<App />);
  const nameElements = screen.getAllByText(/Tirthesh Jain/i);
  expect(nameElements.length).toBeGreaterThan(0);

  const themeToggleButton = screen.getByRole('button', { name: /toggle dark\/light mode/i });
  expect(themeToggleButton).toBeInTheDocument();
});
