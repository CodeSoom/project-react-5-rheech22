import { createSlice } from '@reduxjs/toolkit';

import { getCalories, getActivityDescription } from './utils';

const { actions, reducer } = createSlice({
  name: 'application',
  initialState: {
    bodyStats: {
      gender: '',
      age: '',
      height: '',
      weight: '',
      activity: {
        level: 1,
        description: getActivityDescription(1),
      },
      goalNumber: null,
    },
    calculatorMessage: '',
    calories: {
      bmr: 1000,
      tdee: 2000,
      result: 2340,
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
    setCalculatorMessage(state, { payload: text }) {
      return {
        ...state,
        calculatorMessage: text,
      };
    },
  },
});

export const {
  changeBodyStats,
  setCalories,
  setCalculatorMessage,
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
