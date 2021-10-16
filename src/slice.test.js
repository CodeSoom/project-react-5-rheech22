import thunk from 'redux-thunk';

import configureStore from 'redux-mock-store';

import reducer, {
  calculateCalories,
  changeBodyStats,
  setCalories,
} from './slice';

const middlewares = [thunk];

const mockStore = configureStore(middlewares);

describe('reducer', () => {
  describe('changeBodyStats', () => {
    it('changes body stats', () => {
      const initialState = {
        bodyStats: {
          male: false,
          female: false,
          age: '',
          height: '',
          weight: '',
          activity: '1.2',
        },
      };

      const state = reducer(
        initialState,
        changeBodyStats({ name: 'age', value: '24' }),
      );

      expect(state.bodyStats.age).toBe('24');
    });
  });

  describe('setCalories', () => {
    it('changes a field of review', () => {
      const initialState = {
        calories: {
          bmr: '',
          tdee: '',
        },
      };

      const state = reducer(
        initialState,
        setCalories({ bmr: '123', tdee: '345' }),
      );

      expect(state.calories.bmr).toBe('123');
      expect(state.calories.tdee).toBe('345');
    });
  });
});

describe('actions', () => {
  let store;

  describe('calculateCalories', () => {
    beforeEach(() => {
      store = mockStore({
        bodyStats: {
          male: true,
          female: false,
          age: '35',
          height: '180',
          weight: '75',
          activity: '1.2',
        },
      });
    });

    it('dispatchs setCalories', async () => {
      await store.dispatch(calculateCalories());

      const actions = store.getActions();

      expect(actions[0]).toEqual({
        type: 'application/setCalories',
        payload: { bmr: 1705, tdee: 2046 },
      });
    });
  });
});
