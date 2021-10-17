import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import App from './App';

jest.mock('react-redux');

describe('App', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      bodyStats: {
        male: false,
        female: false,
        age: 0,
        height: 0,
        weight: 0,
        activityLevel: 1.2,
      },
      calories: {
        bmr: 1000,
        tdee: 1500,
      },
    }));
  });

  it('renders page title', () => {
    const { container } = render((
      <App />
    ));
    expect(container).toHaveTextContent('TDEE');
  });

  it('renders inputs', () => {
    const { queryByLabelText } = render((
      <App />
    ));

    expect(queryByLabelText('남')).not.toBeNull();
    expect(queryByLabelText('여')).not.toBeNull();
    expect(queryByLabelText(/나이/)).not.toBeNull();
    expect(queryByLabelText('키')).not.toBeNull();
    expect(queryByLabelText('몸무게')).not.toBeNull();
    expect(queryByLabelText('활동량')).not.toBeNull();
  });

  it('renders calories', () => {
    const { container } = render((
      <App />
    ));

    expect(container).toHaveTextContent('BMR: 1000');
    expect(container).toHaveTextContent('TDEE: 1500');
  });
});
