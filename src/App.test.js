import { render, screen } from '@testing-library/react';
import App from './App';

test('renders portfolio with name and accessible chatbot button', () => {
  render(<App />);
  const nameElement = screen.getByRole('link', { name: /tirthesh jain/i });
  expect(nameElement).toBeInTheDocument();

  const chatButton = screen.getByRole('button', { name: /open ai chat assistant/i });
  expect(chatButton).toBeInTheDocument();
});
