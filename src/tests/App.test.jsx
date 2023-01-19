
import React from 'react';
import { render, screen } from '@testing-library/react';
import './__mocks__/matchMedia.mock';
import App from '../App';
import TextForm from '../components/form';

test('Render ToDo app', () => {
  render(<App />);
  const title = screen.getByText("Submit");
  expect(title).toBeVisible();
});
