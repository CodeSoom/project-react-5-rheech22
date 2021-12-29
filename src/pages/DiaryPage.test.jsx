import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import DiaryPage from './DiaryPage';

jest.mock('react-redux');

describe('DiaryPage', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      calories: {
        result: 2000,
      },
      diaryValues: {
        calories: 2000,
        carbs: null,
        proteins: null,
        fats: null,
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
