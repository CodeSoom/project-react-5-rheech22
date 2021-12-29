import { render } from '@testing-library/react';

import { useSelector, useDispatch } from 'react-redux';

import DiaryContainer from './DiaryContainer';

jest.mock('react-redux');

describe('DiaryContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
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
      <DiaryContainer />
    ));

    expect(container).toHaveTextContent('식단 페이지');
  });
});
