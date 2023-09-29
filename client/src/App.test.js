<<<<<<< HEAD
import React from 'react';
import { screen } from '@testing-library/react';
import { render } from './test-utils';
=======
import { render, screen } from '@testing-library/react';
>>>>>>> 17357afb4dbba99cb899c8f839801f81f1be08e5
import App from './App';

test('renders learn react link', () => {
  render(<App />);
<<<<<<< HEAD
  const linkElement = screen.getByText(/learn chakra/i);
=======
  const linkElement = screen.getByText(/learn react/i);
>>>>>>> 17357afb4dbba99cb899c8f839801f81f1be08e5
  expect(linkElement).toBeInTheDocument();
});
