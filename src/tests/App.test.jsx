import React from 'react';
import { render, screen } from '@testing-library/react';
import './__mocks__/matchMedia.mock.ts';
import TextForm from '../components/form';

test('Render ToDo app', () => {
  render(<TextForm />);
  const title = screen.getByText('Submit');
  expect(title).toBeVisible();
});
