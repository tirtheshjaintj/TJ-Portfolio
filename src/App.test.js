import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import axios from 'axios';
import App from './App';

jest.mock('axios');

beforeEach(() => {
  axios.get.mockResolvedValue({ data: {} });
  axios.post.mockResolvedValue({ data: {} });
});

test('renders portfolio heading and brand name', async () => {
  render(<App />);
  const brandElement = screen.getByRole('link', { name: /tirthesh jain/i });
  expect(brandElement).toBeInTheDocument();
  await waitFor(() => expect(axios.get).toHaveBeenCalled());
});

test('renders accessible dark mode toggle button and handles click', async () => {
  render(<App />);
  const toggleButton = screen.getByRole('button', { name: /toggle dark mode/i });
  expect(toggleButton).toBeInTheDocument();
  expect(toggleButton).toHaveAttribute('title', 'Toggle dark mode');

  fireEvent.click(toggleButton);
  expect(toggleButton).toBeInTheDocument();
  await waitFor(() => expect(axios.get).toHaveBeenCalled());
});
