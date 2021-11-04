import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import DiaryContainer from './DiaryContainer';

jest.mock('react-redux');

describe('DiaryContainer', () => {
  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector({
      calories: {
        result: 2000,
      },
    }));
  });

  it('renders page title', () => {
    const { container } = render((
      <DiaryContainer />
    ));

    expect(container).toHaveTextContent('식단 페이지');
  });

  it('renders personal calories', () => {
    const { container } = render((
      <DiaryContainer />
    ));

    expect(container).toHaveTextContent('2000');
  });
});
