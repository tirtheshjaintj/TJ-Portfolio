import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Tirthesh Jain heading or link', () => {
  render(<App />);
  const linkElements = screen.getAllByText(/Tirthesh Jain/i);
  expect(linkElements.length).toBeGreaterThan(0);
});

test('renders dark mode toggle button with accessible label', () => {
  render(<App />);
  const darkModeBtn = screen.getByRole('button', { name: /toggle dark mode/i });
  expect(darkModeBtn).toBeInTheDocument();
});

test('renders chatbot toggle button with accessible label', () => {
  render(<App />);
  const chatbotBtn = screen.getByRole('button', { name: /open chatbot/i });
  expect(chatbotBtn).toBeInTheDocument();
});
