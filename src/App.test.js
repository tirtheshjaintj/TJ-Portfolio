import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders portfolio title', () => {
  render(<App />);
  const headingElements = screen.getAllByText(/Tirthesh Jain/i);
  expect(headingElements.length).toBeGreaterThan(0);
});

test('chatbot toggle button has accessible label and opens chat container', () => {
  render(<App />);
  const chatToggleBtn = screen.getByRole('button', { name: /Open JARVIS chat assistant/i });
  expect(chatToggleBtn).toBeInTheDocument();
  expect(chatToggleBtn).toHaveAttribute('aria-expanded', 'false');

  fireEvent.click(chatToggleBtn);

  expect(chatToggleBtn).toHaveAttribute('aria-expanded', 'true');
  expect(screen.getByRole('button', { name: /Close JARVIS chat assistant/i })).toBeInTheDocument();

  const sendBtn = screen.getByRole('button', { name: /Send message/i });
  expect(sendBtn).toBeInTheDocument();
  expect(sendBtn).toBeDisabled();

  const input = screen.getByPlaceholderText(/Ask Anything about Tirthesh.../i);
  fireEvent.change(input, { target: { value: 'Hello' } });
  expect(sendBtn).not.toBeDisabled();
});
