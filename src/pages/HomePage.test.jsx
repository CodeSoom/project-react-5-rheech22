import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import { MemoryRouter } from 'react-router';

import HomePage from './HomePage';

import { getActivityDescription } from '../utils';

jest.mock('react-redux');

describe('HomePage', () => {
  window.HTMLElement.prototype.scrollIntoView = jest.fn();

  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      bodyStats: {
        gender: '',
        age: 0,
        height: 0,
        weight: 0,
        activity: {
          level: 1,
          description: getActivityDescription(1),
        },
        goalNubmer: 0,
      },
      calories: {
        bmr: 1000,
        tdee: 1500,
        result: 2000,
      },
    }));
  });

  it('renders page title', () => {
    const { container } = render((
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    ));
    expect(container).toHaveTextContent('CalCal');
  });

  it('renders inputs', () => {
    const { queryByLabelText, getByText } = render((
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    ));

    expect(getByText('남')).not.toBeNull();
    expect(getByText('여')).not.toBeNull();
    expect(queryByLabelText('만 나이')).not.toBeNull();
    expect(queryByLabelText('키(cm)')).not.toBeNull();
    expect(queryByLabelText('몸무게(kg)')).not.toBeNull();
    expect(queryByLabelText('Activity Level')).not.toBeNull();
  });

  it('renders calories', () => {
    const { container } = render((
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    ));

    expect(container).toHaveTextContent('1000');
    expect(container).toHaveTextContent('1500');
    expect(container).toHaveTextContent('2000');
  });
});
