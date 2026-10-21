import { render, screen } from '@testing-library/react';
import App from './App';
import axios from 'axios';

jest.mock('axios');

test('renders portfolio heading and accessible dark mode toggle button', () => {
  axios.get.mockResolvedValue({ data: {} });
  axios.post.mockResolvedValue({ data: {} });

  render(<App />);

  const nameElements = screen.getAllByText(/Tirthesh Jain/i);
  expect(nameElements.length).toBeGreaterThan(0);

  const darkModeButton = screen.getByRole('button', { name: /toggle dark mode/i });
  expect(darkModeButton).toBeInTheDocument();
});
