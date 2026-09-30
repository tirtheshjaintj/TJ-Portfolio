import { render, screen } from '@testing-library/react';
import App from './App';

test('renders portfolio application with accessible floating action buttons', () => {
  render(<App />);

  // Check that dark mode toggle button is present with correct ARIA label
  const darkModeButton = screen.getByRole('button', { name: /toggle dark mode/i });
  expect(darkModeButton).toBeInTheDocument();

  // Check that chatbot toggle button is present with correct ARIA label
  const chatbotButton = screen.getByRole('button', { name: /toggle ai chat assistant/i });
  expect(chatbotButton).toBeInTheDocument();
});
