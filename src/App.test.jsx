import { render, fireEvent } from '@testing-library/react';

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
        age: '',
        height: '',
        weight: '',
        activityLevel: '1.2',
      },
      calories: {
        bmr: '',
        tdee: '',
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

    expect(queryByLabelText('남성')).not.toBeNull();
    expect(queryByLabelText('여성')).not.toBeNull();
    expect(queryByLabelText('나이')).not.toBeNull();
    expect(queryByLabelText('키')).not.toBeNull();
    expect(queryByLabelText('몸무게')).not.toBeNull();
    expect(queryByLabelText('활동량')).not.toBeNull();
  });

  it('listens change/click events', () => {
    const { getByLabelText } = render((
      <App />
    ));

    fireEvent.change(getByLabelText('나이'), { target: { value: '35' } });

    expect(dispatch).toBeCalledWith({
      type: 'application/changeBodyStats',
      payload: {
        name: 'age',
        value: '35',
      },
    });

    fireEvent.click(getByLabelText('남성'));

    expect(dispatch).toBeCalledWith({
      type: 'application/changeBodyStats',
      payload: {
        name: 'male',
        value: true,
      },
    });
  });
});
