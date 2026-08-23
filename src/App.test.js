import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the selected work index', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /selected work/i })).toBeInTheDocument();
});
