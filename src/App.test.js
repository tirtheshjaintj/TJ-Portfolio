import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import ModeBall from './components/ModeBall';

test('renders portfolio navbar brand name', () => {
  render(<App />);
  const brandElements = screen.getAllByText(/Tirthesh Jain/i);
  expect(brandElements.length).toBeGreaterThan(0);
});

test('renders ModeBall as an accessible theme toggle button', () => {
  const handleToggle = jest.fn();
  render(<ModeBall mode={handleToggle} />);

  const button = screen.getByRole('button', { name: /toggle dark mode/i });
  expect(button).toBeInTheDocument();
  expect(button).toHaveAttribute('type', 'button');

  fireEvent.click(button);
  expect(handleToggle).toHaveBeenCalledTimes(1);
});
