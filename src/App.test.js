import { render, screen } from '@testing-library/react';
import App from './App';

test('renders portfolio owner name', () => {
  render(<App />);
  const nameElement = screen.getAllByText(/Tirthesh Jain/i)[0];
  expect(nameElement).toBeInTheDocument();
});

test('chatbot toggle button has proper accessibility attributes', () => {
  render(<App />);
  const toggleBtn = screen.getByRole('button', { name: /toggle chat assistant jarvis/i });
  expect(toggleBtn).toBeInTheDocument();
  expect(toggleBtn).toHaveAttribute('aria-expanded', 'false');
});
