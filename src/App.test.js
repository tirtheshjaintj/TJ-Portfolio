import { render, screen } from '@testing-library/react';
import App from './App';

test('renders brand name and chatbot toggle button', () => {
  render(<App />);
  const brandElements = screen.getAllByText(/Tirthesh Jain/i);
  expect(brandElements.length).toBeGreaterThan(0);

  const chatbotBtn = screen.getByRole('button', { name: /open jarvis chatbot/i });
  expect(chatbotBtn).toBeInTheDocument();
});
