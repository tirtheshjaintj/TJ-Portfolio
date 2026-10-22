import { render, screen } from '@testing-library/react';
import App from './App';

// Mock speech synthesis
window.speechSynthesis = {
  speak: jest.fn(),
};

test('renders portfolio page with accessible controls', () => {
  render(<App />);

  // Verify header brand name link
  const brandLink = screen.getByRole('link', { name: 'Tirthesh Jain' });
  expect(brandLink).toBeInTheDocument();

  // Verify theme toggle button accessibility
  const themeToggle = screen.getByRole('button', { name: /toggle dark mode/i });
  expect(themeToggle).toBeInTheDocument();

  // Verify chatbot button accessibility
  const chatBotBtn = screen.getByRole('button', { name: /open ai assistant/i });
  expect(chatBotBtn).toBeInTheDocument();

  // Verify social links accessibility
  const githubLink = screen.getByRole('link', { name: /github profile/i });
  expect(githubLink).toBeInTheDocument();
});
