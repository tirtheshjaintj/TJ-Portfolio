import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Chatbot from './ChatBot';

test('renders Chatbot toggle button with accessible labels', () => {
  render(<Chatbot />);
  const toggleBtn = screen.getByRole('button', { name: /open chat assistant/i });
  expect(toggleBtn).toBeInTheDocument();
  expect(toggleBtn).toHaveAttribute('aria-expanded', 'false');

  fireEvent.click(toggleBtn);
  expect(toggleBtn).toHaveAttribute('aria-expanded', 'true');

  const closeBtn = screen.getByRole('button', { name: /close chat assistant/i });
  expect(closeBtn).toBeInTheDocument();

  const clearBtn = screen.getByRole('button', { name: /clear chat history/i });
  expect(clearBtn).toBeInTheDocument();

  const inputEl = screen.getByPlaceholderText(/ask anything about tirthesh/i);
  expect(inputEl).toHaveAttribute('aria-label', 'Ask anything about Tirthesh');

  const sendBtn = screen.getByRole('button', { name: /send message/i });
  expect(sendBtn).toBeInTheDocument();
});
