import { render, screen } from '@testing-library/react';
import App from './App';

jest.mock('axios', () => ({
  get: jest.fn().mockResolvedValue({ data: {} }),
  post: jest.fn().mockResolvedValue({ data: {} }),
}));

// Mock window.speechSynthesis
window.speechSynthesis = {
  speak: jest.fn(),
};

test('renders portfolio page with accessible theme toggle and chatbot buttons', () => {
  render(<App />);

  const themeButton = screen.getByRole('button', { name: /toggle theme/i });
  expect(themeButton).toBeInTheDocument();

  const chatbotButton = screen.getByRole('button', { name: /toggle chatbot/i });
  expect(chatbotButton).toBeInTheDocument();
});
