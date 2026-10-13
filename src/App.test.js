import { render, screen } from '@testing-library/react';
import App from './App';

test('renders portfolio page with accessible chatbot and social links', () => {
  render(<App />);
  const brandNames = screen.getAllByText(/Tirthesh Jain/i);
  expect(brandNames.length).toBeGreaterThan(0);

  const chatBtn = screen.getByRole('button', { name: /Open AI chat assistant/i });
  expect(chatBtn).toBeInTheDocument();

  const githubLink = screen.getByRole('link', { name: /GitHub Profile/i });
  expect(githubLink).toBeInTheDocument();
});
