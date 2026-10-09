import { render, screen } from '@testing-library/react';
import App from './App';

// Mock axios to avoid network requests during test execution
jest.mock('axios', () => ({
  get: jest.fn(() => Promise.resolve({ data: {} })),
  post: jest.fn(() => Promise.resolve({ data: {} }))
}));

test('renders portfolio app with accessible control buttons', () => {
  render(<App />);

  const modeButton = screen.getByRole('button', { name: /toggle dark mode/i });
  expect(modeButton).toBeInTheDocument();

  const chatbotButton = screen.getByRole('button', { name: /open ai chat assistant/i });
  expect(chatbotButton).toBeInTheDocument();
});
