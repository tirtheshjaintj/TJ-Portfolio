import { render, screen } from '@testing-library/react';
import App from './App';

test('renders portfolio heading with name', () => {
  render(<App />);
  const nameElement = screen.getAllByText(/Tirthesh Jain/i)[0];
  expect(nameElement).toBeInTheDocument();
});
