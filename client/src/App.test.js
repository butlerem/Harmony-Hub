import React from 'react';
import { screen } from '@testing-library/react';
import { render } from './test-utils';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElementC = screen.getByText(/learn chakra/i);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
  expect(linkElementC).toBeInTheDocument();
});
