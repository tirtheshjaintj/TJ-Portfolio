import { render, screen } from '@testing-library/react';
import App from './App';

// Mock axios to avoid actual network calls during tests
jest.mock('axios', () => ({
  get: jest.fn().mockResolvedValue({ data: {} }),
  post: jest.fn().mockResolvedValue({ data: {} }),
}));

test('renders portfolio page with name', () => {
  render(<App />);
  const nameElements = screen.getAllByText(/Tirthesh Jain/i);
  expect(nameElements.length).toBeGreaterThan(0);
});
