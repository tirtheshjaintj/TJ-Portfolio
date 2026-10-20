import { render, screen } from '@testing-library/react';
import App from './App';

// Mock axios to avoid network requests during test execution
jest.mock('axios', () => {
  const mockAxios = {
    get: jest.fn(() => Promise.resolve({ data: {} })),
    post: jest.fn(() => Promise.resolve({ data: {} }))
  };
  return {
    __esModule: true,
    default: mockAxios,
    ...mockAxios
  };
});

test('renders portfolio heading and accessible floating action buttons', () => {
  render(<App />);
  const brandElements = screen.getAllByText(/Tirthesh Jain/i);
  expect(brandElements.length).toBeGreaterThan(0);

  const darkModeBtn = screen.getByRole('button', { name: /toggle dark mode/i });
  expect(darkModeBtn).toBeInTheDocument();

  const chatbotToggleBtn = screen.getByRole('button', { name: /toggle chatbot/i });
  expect(chatbotToggleBtn).toBeInTheDocument();
});
