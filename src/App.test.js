import { render, screen } from '@testing-library/react';
import App from './App';

test('renders portfolio and chat assistant', () => {
  render(<App />);
  const nameElement = screen.getByRole('link', { name: /Tirthesh Jain/i });
  expect(nameElement).toBeInTheDocument();
  const chatButton = screen.getByRole('button', { name: /Open chat assistant/i });
  expect(chatButton).toBeInTheDocument();
});
