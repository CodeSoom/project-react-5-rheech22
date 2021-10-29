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
      bmr: 0,
      tdee: 0,
      result: 0,
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
      dispatch(setCalculatorMessage(
        '모든 항목을 입력해주세요',
      ));
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
