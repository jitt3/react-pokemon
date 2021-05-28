import React from 'react';
import {render, screen} from '@testing-library/react';
import App from './App';
import {createMemoryHistory} from 'history';
import {Router} from 'react-router-dom';
test('renders learn react link', () => {
  const history = createMemoryHistory();
  render(
    <Router history={history}>
      <App />
    </Router>,
  );
  const linkElement = screen.getByTestId('app');
  expect(linkElement).toBeInTheDocument();
});
