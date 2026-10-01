import { render, screen } from '@testing-library/react';
import App from './App';

test('renders portfolio and accessible social links & chat button', () => {
  render(<App />);

  // Verify social media icon links have accessible ARIA labels
  expect(screen.getByRole('link', { name: /github profile/i })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /linkedin profile/i })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /xiaomi developer profile/i })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /google play store developer page/i })).toBeInTheDocument();

  // Verify chatbot button has accessible ARIA label
  expect(screen.getByRole('button', { name: /open chat assistant/i })).toBeInTheDocument();
});
