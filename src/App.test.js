import { render, screen, fireEvent } from '@testing-library/react';
import ModeBall from './components/ModeBall';
import Chatbot from './components/ChatBot';

test('renders accessible dark mode toggle button with aria-label', () => {
  const handleToggle = jest.fn();
  render(<ModeBall mode={handleToggle} />);
  const toggleBtn = screen.getByRole('button', { name: /toggle dark mode/i });
  expect(toggleBtn).toBeInTheDocument();
  fireEvent.click(toggleBtn);
  expect(handleToggle).toHaveBeenCalledTimes(1);
});

test('renders accessible chatbot trigger and toggles chat view with updated aria attributes', () => {
  render(<Chatbot />);
  const openChatBtn = screen.getByRole('button', { name: /open chat assistant/i });
  expect(openChatBtn).toBeInTheDocument();
  expect(openChatBtn).toHaveAttribute('aria-expanded', 'false');

  fireEvent.click(openChatBtn);
  expect(openChatBtn).toHaveAttribute('aria-expanded', 'true');
  expect(screen.getByRole('button', { name: /close chat assistant/i })).toBeInTheDocument();

  const sendBtn = screen.getByRole('button', { name: /send message/i });
  expect(sendBtn).toBeInTheDocument();

  const clearHistoryBtn = screen.getByRole('button', { name: /clear chat history/i });
  expect(clearHistoryBtn).toBeInTheDocument();
});
