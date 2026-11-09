import { render, screen, fireEvent } from '@testing-library/react';
import Chatbot from './components/ChatBot';

test('renders chatbot button with accessible attributes and toggles chat window', () => {
  render(<Chatbot />);
  const toggleBtn = screen.getByRole('button', { name: /open ai chat assistant/i });
  expect(toggleBtn).toBeInTheDocument();
  expect(toggleBtn).toHaveAttribute('aria-expanded', 'false');

  fireEvent.click(toggleBtn);

  expect(toggleBtn).toHaveAttribute('aria-expanded', 'true');
  expect(screen.getByRole('button', { name: /close ai chat assistant/i })).toBeInTheDocument();
  expect(screen.getByPlaceholderText(/ask anything about tirthesh/i)).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /send message/i })).toBeInTheDocument();
});
