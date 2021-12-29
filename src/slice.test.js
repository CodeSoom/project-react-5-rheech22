import thunk from 'redux-thunk';

import configureStore from 'redux-mock-store';

import reducer, {
  calculateCalories,
  changeBodyStats,
  setCalculatorMessage,
  setCalories,
} from './slice';

import { getActivityDescription, getCalories, getGoalNumber } from './utils';

const middlewares = [thunk];

const mockStore = configureStore(middlewares);

describe('reducer', () => {
  given('previousState', () => ({
    bodyStats: {
      gender: '',
      age: 0,
      height: 0,
      weight: 0,
      activity: given.activity,
      goalNumber: null,
    },
    calculatorMessage: '',
    calories: {
      bmr: null,
      tdee: null,
      result: null,
    },
    diaryValues: {
      calories: null,
      carbs: null,
      proteins: null,
      fats: null,
    },
  }));

  describe('changeBodyStats', () => {
    it('changes gender', () => {
      const state = reducer(
        given.previousState,
        changeBodyStats({ name: 'gender', value: '남' }),
      );

      expect(state.bodyStats.gender).toBe('남');
    });

    it('changes an age', () => {
      const state = reducer(
        given.previousState,
        changeBodyStats({ name: 'age', value: 24 }),
      );

      expect(state.bodyStats.age).toBe(24);
    });

    it('changes a height', () => {
      const state = reducer(
        given.previousState,
        changeBodyStats({ name: 'height', value: 180 }),
      );

      expect(state.bodyStats.height).toBe(180);
    });

    it('changes an weight', () => {
      const state = reducer(
        given.previousState,
        changeBodyStats({ name: 'weight', value: 75 }),
      );

      expect(state.bodyStats.weight).toBe(75);
    });

    it('changes an activity level', () => {
      given('activity', () => ({
        level: 1,
        description: getActivityDescription(1),
      }));

      const newValue = {
        level: 3,
        description: getActivityDescription(3),
      };

      const state = reducer(
        given.previousState,
        changeBodyStats({ name: 'activity', value: newValue }),
      );

      expect(state.bodyStats.activity).toEqual(newValue);
    });

    it('changes an goalNumber', () => {
      const newValue = getGoalNumber('증량');

      const state = reducer(
        given.previousState,
        changeBodyStats({ name: 'goalNumber', value: newValue }),
      );

      expect(state.bodyStats.goalNumber).toBe(newValue);
    });
  });

  describe('setCalories', () => {
    it('sets calories', () => {
      const newValue = {
        bmr: 123,
        tdee: 345,
        result: 567,
      };

      const state = reducer(
        given.previousState,
        setCalories(newValue),
      );

      expect(state.calories).toEqual(newValue);
    });
  });

  describe('setCalculatorMessage', () => {
    it('changes message', () => {
      const state = reducer(
        given.previousState,
        setCalculatorMessage('메세지입니다.'),
      );

      expect(state.calculatorMessage).toBe('메세지입니다.');
    });
  });
});

describe('actions', () => {
  let store;

  describe('calculateCalories', () => {
    given('previousState', () => ({
      bodyStats: {
        gender: given.gender,
        age: given.age,
        height: 180,
        weight: 75,
        activity: {
          level: 1,
          description: getActivityDescription(1),
        },
        goalNumber: given.goalNumber,
      },
    }));

    context('with all inputs', () => {
      given('gender', () => '남');
      given('age', () => 34);
      given('goalNumber', () => 1.2);

      beforeEach(() => {
        store = mockStore(given.previousState);
      });

      it('dispatchs setCalories', async () => {
        await store.dispatch(calculateCalories());

        const {
          bodyStats: {
            gender,
            height,
            weight,
            age,
            activity,
            goalNumber,
          },
        } = store.getState();

        const { level: activityLevel } = activity;

        const newValue = getCalories({
          gender, weight, height, age, activityLevel, goalNumber,
        });

        const actions = store.getActions();

        expect(actions[0]).toEqual({
          type: 'application/setCalories',
          payload: newValue,
        });
      });
    });

    context('without any inputs', () => {
      given('gender', () => '');
      given('age', () => 0);
      given('goalNumber', () => null);

      beforeEach(() => {
        store = mockStore(given.previousState);
      });

      it('doesn\'t dispatch setCalories', async () => {
        await store.dispatch(calculateCalories());

        const actions = store.getActions();

        expect(actions[0]).toEqual({
          type: 'application/setCalculatorMessage',
          payload: '모든 항목을 입력해주세요',
        });
      });
    });
  });
});
