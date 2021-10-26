import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import CalculatorContainer from './CalculatorContainer';

import { getActivityDescription } from '../utils';

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
          description: getActivityDescription(1),
        },
        goalNubmer: 0,
      },
      calories: {
        bmr: null,
        tdee: null,
        result: null,
      },
    }));
  });

  it('renders inputs', () => {
    const { queryByLabelText } = render((
      <CalculatorContainer />
    ));

    expect(queryByLabelText('만 나이')).not.toBeNull();
    expect(queryByLabelText('키(cm)')).not.toBeNull();
    expect(queryByLabelText('몸무게(kg)')).not.toBeNull();
    expect(queryByLabelText('Activity Level')).not.toBeNull();
  });

  it('renders buttons', () => {
    const { getByText } = render((
      <CalculatorContainer />
    ));

    expect(getByText('남')).not.toBeNull();
    expect(getByText('여')).not.toBeNull();
    expect(getByText('감량')).not.toBeNull();
    expect(getByText('유지')).not.toBeNull();
    expect(getByText('증량')).not.toBeNull();
    expect(getByText('Calculate')).not.toBeNull();
  });

  it('listens change/click events to choose gender', () => {
    const { getByLabelText, getByText } = render((
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

    fireEvent.click(getByText('남'));

    expect(dispatch).toBeCalled();
  });

  it('listens change event to choose user\'s goal', () => {
    const { getByText } = render((
      <CalculatorContainer />
    ));

    fireEvent.click(getByText('감량'));

    expect(dispatch).toBeCalled();
  });
});
