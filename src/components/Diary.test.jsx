import { render } from '@testing-library/react';

import Diary from './Diary';

describe('Diary', () => {
  it('renders personal calories', () => {
    const { container } = render((
      <Diary calories="2000" />
    ));

    expect(container).toHaveTextContent('2000');
  });
});
