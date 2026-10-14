import { render, screen } from '@testing-library/react';
import App from './App';

// Mock axios to avoid network calls during tests
jest.mock('axios', () => ({
  get: jest.fn(() => Promise.resolve({ data: {} })),
  post: jest.fn(() => Promise.resolve({ data: {} })),
}));

// Mock window.speechSynthesis if missing
if (!window.speechSynthesis) {
  window.speechSynthesis = {
    speak: jest.fn(),
  };
}

test('renders portfolio and accessible floating controls', () => {
  render(<App />);

  // Check main portfolio content
  const brandNames = screen.getAllByText(/Tirthesh Jain/i);
  expect(brandNames.length).toBeGreaterThan(0);

  // Check dark mode button accessibility
  const darkmodeBtn = screen.getByRole('button', { name: /toggle dark mode/i });
  expect(darkmodeBtn).toBeInTheDocument();

  // Check chatbot button accessibility
  const chatbotBtn = screen.getByRole('button', { name: /open ai assistant/i });
  expect(chatbotBtn).toBeInTheDocument();
});
