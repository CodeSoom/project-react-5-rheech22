import { createSlice } from '@reduxjs/toolkit';

import { getActivityDescription, getGoalNumber } from './utils';

const { actions, reducer } = createSlice({
  name: 'application',
  initialState: {
    bodyStats: {
      gender: '',
      age: 0,
      height: 0,
      weight: 0,
      activity: {
        level: 1,
        description: '운동 거의 안함, 주로 앉아서 앉아서 일하거나 재택 근무로 활동량 매우 적음',
      },
      goalNubmer: 0,
    },
    calories: {
      bmr: null,
      tdee: null,
      result: null,
    },
  },
  reducers: {
    changeBodyStats(state, { payload: { name, value } }) {
      if (name === 'activity') {
        return {
          ...state,
          bodyStats: {
            ...state.bodyStats,
            activity: {
              level: value,
              description: getActivityDescription(value),
            },
          },
        };
      }

      if (name === 'goalNubmer') {
        return {
          ...state,
          bodyStats: {
            ...state.bodyStats,
            goalNubmer: getGoalNumber(value),
          },
        };
      }

      return {
        ...state,
        bodyStats: {
          ...state.bodyStats,
          [name]: value,
        },
      };
    },
    setCalories(state, { payload: { bmr, tdee, result } }) {
      return {
        ...state,
        calories: {
          ...state.calories,
          bmr,
          tdee,
          result,
        },
      };
    },
  },
});

export const {
  changeBodyStats,
  setCalories,
} = actions;

export function calculateCalories() {
  return async (dispatch, getState) => {
    const {
      bodyStats: {
        gender,
        age,
        height,
        weight,
        activity,
        goalNubmer,
      },
    } = getState();

    if (!age || !height || !weight || !gender) {
      return;
    }

    const correction = gender === 'male' ? 5 : -161;
    const equation = (10 * weight) + (6.25 * height) - (5 * age);
    const bmr = Math.round(equation + correction);

    const activityNumbers = [1.2, 1.375, 1.55, 1.725, 1.9];
    const { level } = activity;

    const tdee = Math.round(bmr * activityNumbers[level - 1]);

    const result = Math.round(tdee * goalNubmer);

    dispatch(setCalories({ bmr, tdee, result }));
  };
}

export default reducer;
