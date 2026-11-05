import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Chatbot from './ChatBot';

describe('Chatbot component', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test('renders launcher button with accessible attributes', () => {
    render(<Chatbot />);
    const launcherBtn = screen.getByRole('button', { name: /Open JARVIS AI chat/i });
    expect(launcherBtn).toBeInTheDocument();
    expect(launcherBtn).toHaveAttribute('aria-expanded', 'false');
  });

  test('toggles chatbot dialog and updates aria attributes', () => {
    render(<Chatbot />);
    const launcherBtn = screen.getByRole('button', { name: /Open JARVIS AI chat/i });

    // Open chatbot
    fireEvent.click(launcherBtn);
    expect(launcherBtn).toHaveAttribute('aria-expanded', 'true');
    expect(launcherBtn).toHaveAttribute('aria-label', 'Close JARVIS AI chat');

    // Dialog elements are present with accessible labels
    const dialog = screen.getByRole('dialog', { name: /JARVIS AI Chat/i });
    expect(dialog).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Clear chat history/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Close JARVIS chat/i })).toBeInTheDocument();

    const input = screen.getByRole('textbox', { name: /Ask Anything about Tirthesh/i });
    const sendBtn = screen.getByRole('button', { name: /Send message/i });

    // Send button disabled when input is empty
    expect(sendBtn).toBeDisabled();

    // Type input, send button enabled
    fireEvent.change(input, { target: { value: 'Hello' } });
    expect(sendBtn).not.toBeDisabled();
  });
});
