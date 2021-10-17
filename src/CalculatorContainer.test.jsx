import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import CalculatorContainer from './CalculatorContainer';

jest.mock('react-redux');

describe('CalculatorContainer', () => {
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
          description: '운동 거의 안함',
        },
      },
      calories: {
        bmr: 0,
        tdee: 0,
      },
    }));
  });

  it('renders inputs', () => {
    const { queryByLabelText } = render((
      <CalculatorContainer />
    ));

    expect(queryByLabelText('남')).not.toBeNull();
    expect(queryByLabelText('여')).not.toBeNull();
    expect(queryByLabelText(/나이/)).not.toBeNull();
    expect(queryByLabelText('키')).not.toBeNull();
    expect(queryByLabelText('몸무게')).not.toBeNull();
    expect(queryByLabelText('Activity Level')).not.toBeNull();
  });

  it('listens change/click events', () => {
    const { getByLabelText } = render((
      <CalculatorContainer />
    ));

    fireEvent.change(getByLabelText(/나이/), { target: { value: 34 } });

    expect(dispatch).toBeCalledWith({
      type: 'application/changeBodyStats',
      payload: {
        name: 'age',
        value: '34',
      },
    });

    fireEvent.click(getByLabelText('남'));

    expect(dispatch).toBeCalledWith({
      type: 'application/changeBodyStats',
      payload: {
        name: 'gender',
        value: 'male',
      },
    });
  });
});
