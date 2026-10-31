import { render, screen } from '@testing-library/react';
import App from './App';

// Mock speechSynthesis and axios to prevent errors during App render
beforeAll(() => {
  window.speechSynthesis = {
    speak: jest.fn(),
  };
});

test('renders portfolio heading and accessible controls', () => {
  render(<App />);

  // Verify portfolio owner name is rendered
  const brandElements = screen.getAllByText(/Tirthesh Jain/i);
  expect(brandElements.length).toBeGreaterThan(0);

  // Verify dark mode toggle button is accessible by role and accessible name
  const themeToggle = screen.getByRole('button', { name: /toggle dark mode/i });
  expect(themeToggle).toBeInTheDocument();

  // Verify chatbot toggle button is accessible by role and accessible name
  const chatbotToggle = screen.getByRole('button', { name: /open chat assistant/i });
  expect(chatbotToggle).toBeInTheDocument();
  expect(chatbotToggle).toHaveAttribute('aria-expanded', 'false');
});
