import { createSlice } from '@reduxjs/toolkit';

import { getCalories, getActivityDescription } from './utils';

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
        description: getActivityDescription(1),
      },
      goalNumber: null,
    },
    calories: {
      bmr: 1111,
      tdee: 2222,
      result: 3333,
    },
  },
  reducers: {
    changeBodyStats(state, { payload: { name, value } }) {
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
        goalNumber,
      },
    } = getState();

    if (!age || !height || !weight || !gender || !goalNumber) {
      return;
    }

    const { level: activityLevel } = activity;

    const calories = getCalories({
      gender, weight, height, age, activityLevel, goalNumber,
    });

    dispatch(setCalories(calories));
  };
}

export default reducer;
