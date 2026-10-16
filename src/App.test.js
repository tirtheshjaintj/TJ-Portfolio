import { render, screen } from '@testing-library/react';
import App from './App';

test('renders brand name Tirthesh Jain', () => {
  render(<App />);
  const brandElements = screen.getAllByText(/Tirthesh Jain/i);
  expect(brandElements.length).toBeGreaterThan(0);
});

test('renders dark mode toggle button with aria-label', () => {
  render(<App />);
  const modeButton = screen.getByRole('button', { name: /toggle dark mode/i });
  expect(modeButton).toBeInTheDocument();
});

test('renders chatbot toggle button with aria-label', () => {
  render(<App />);
  const chatbotButton = screen.getByRole('button', { name: /toggle ai chatbot/i });
  expect(chatbotButton).toBeInTheDocument();
});
