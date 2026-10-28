import { render, screen } from '@testing-library/react';
import App from './App';

// Mock axios to prevent network calls during testing
jest.mock('axios', () => ({
  get: jest.fn(() => Promise.resolve({ data: {} })),
  post: jest.fn(() => Promise.resolve({ data: {} })),
}));

// Mock window.speechSynthesis
if (!window.speechSynthesis) {
  window.speechSynthesis = {
    speak: jest.fn(),
  };
}

test('renders author name Tirthesh Jain', () => {
  render(<App />);
  const nameElements = screen.getAllByText(/Tirthesh Jain/i);
  expect(nameElements.length).toBeGreaterThan(0);
});

test('renders accessible dark mode toggle button', () => {
  render(<App />);
  const darkModeButton = screen.getByRole('button', { name: /toggle dark mode/i });
  expect(darkModeButton).toBeInTheDocument();
});
