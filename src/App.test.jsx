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
        gender: '',
        age: 0,
        height: 0,
        weight: 0,
        activity: {
          level: 1.2,
          description: '',
        },
        goalNubmer: 0,
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
    expect(queryByLabelText('만 나이(세)')).not.toBeNull();
    expect(queryByLabelText('키(cm)')).not.toBeNull();
    expect(queryByLabelText('몸무게(kg)')).not.toBeNull();
    expect(queryByLabelText('Activity Level')).not.toBeNull();
  });

  it('renders calories', () => {
    const { container } = render((
      <App />
    ));

    expect(container).toHaveTextContent('BMR: 1000');
    expect(container).toHaveTextContent('TDEE: 1500');
  });
});
