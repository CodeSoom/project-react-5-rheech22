import { render } from '@testing-library/react';

import App from './App';

test('App', () => {
  // assertion => A(실제)가 B(expect)여야 한다.
  const { container } = render((
    <App />
  ));

  expect(container).toHaveTextContent('Hello');
});