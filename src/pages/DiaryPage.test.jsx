import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import DiaryPage from './DiaryPage';

jest.mock('react-redux');

describe('DiaryPage', () => {
  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector({
      calories: {
        result: 2000,
      },
    }));
  });

  it('renders page title', () => {
    const { container } = render((
      <DiaryPage />
    ));
    expect(container).toHaveTextContent('식단 페이지');
  });
});
