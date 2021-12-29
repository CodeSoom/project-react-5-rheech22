import { createSlice } from '@reduxjs/toolkit';

import { getCalories, getActivityDescription, getDiaryMacro } from './utils';

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
      bmr: 1500,
      tdee: 2000,
      result: 2300,
    },
    diaryValues: {
      calories: null,
      carbs: null,
      proteins: null,
      fats: null,
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
    setDiaryCalories(state, { payload: value }) {
      return {
        ...state,
        diaryValues: {
          ...state.diaryValues,
          calories: value,
        },
      };
    },
    setDiaryMacro(state, { payload: { carbs, proteins, fats } }) {
      return {
        ...state,
        diaryValues: {
          ...state.diaryValues,
          carbs,
          proteins,
          fats,
        },
      };
    },
  },
});

export const {
  changeBodyStats,
  setCalories,
  setCalculatorMessage,
  setDiaryCalories,
  setDiaryMacro,
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

export function calculateMacro(value) {
  return async (dispatch, getState) => {
    const {
      diaryValues: { calories },
    } = getState();

    // if (!value) {
    //   dispatch(setDiaryMacro({
    //     carbs: null,
    //     proteins: null,
    //     fats: null,
    //   }));
    // }

    const Macros = getDiaryMacro({ calories, value });

    dispatch(setDiaryMacro(Macros));
  };
}

export default reducer;
