import { render, screen } from '@testing-library/react';
import App from './App';

test('renders portfolio application with accessible elements', () => {
  render(<App />);
  const brandElements = screen.getAllByText(/Tirthesh Jain/i);
  expect(brandElements.length).toBeGreaterThan(0);

  const darkModeButton = screen.getByRole('button', { name: /toggle dark mode/i });
  expect(darkModeButton).toBeInTheDocument();

  const chatButton = screen.getByRole('button', { name: /open ai assistant/i });
  expect(chatButton).toBeInTheDocument();
});
