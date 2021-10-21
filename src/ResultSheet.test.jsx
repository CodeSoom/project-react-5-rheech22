import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import ResultSheet from './ResultSheet';

import { getActivityDescription } from './utils';

jest.mock('react-redux');

describe('ResultSheet', () => {
  beforeEach(() => {
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
        bmr: given.bmr,
        tdee: given.tdee,
        result: given.result,
      },
    }));
  });

  context('without calorie values', () => {
    given('bmr', () => null);
    given('tdee', () => null);
    given('result', () => null);

    it('renders "Hello"', () => {
      const { container } = render((
        <ResultSheet />
      ));

      expect(container).toHaveTextContent('Hello');
      expect(container).not.toHaveTextContent('BMR');
      expect(container).not.toHaveTextContent('TDEE');
      expect(container).not.toHaveTextContent('RESULT');
    });
  });

  context('with calorie values', () => {
    given('bmr', () => 1000);
    given('tdee', () => 1500);
    given('result', () => 2000);
    it('renders calories', () => {
      const { container } = render((
        <ResultSheet />
      ));

      expect(container).toHaveTextContent('1000');
      expect(container).toHaveTextContent('1500');
      expect(container).toHaveTextContent('2000');
    });

    it('renders macro nutrition', () => {
      const { container } = render((
        <ResultSheet />
      ));

      expect(container).toHaveTextContent('Macro Nutrition');
    });
  });
});
