import { render, screen } from '@testing-library/react';
import App from './App';

test('renders portfolio with accessible interactive controls', () => {
  render(<App />);
  const nameElements = screen.getAllByText(/Tirthesh Jain/i);
  expect(nameElements.length).toBeGreaterThan(0);

  const darkModeButton = screen.getByRole('button', { name: /toggle dark mode/i });
  expect(darkModeButton).toBeInTheDocument();

  const chatButton = screen.getByRole('button', { name: /open ai chat assistant/i });
  expect(chatButton).toBeInTheDocument();
});
