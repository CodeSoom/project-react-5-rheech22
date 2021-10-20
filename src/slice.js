import { createSlice } from '@reduxjs/toolkit';

import { getCalories } from './utils';

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
      goalNumber: 0,
    },
    calories: {
      bmr: null,
      tdee: null,
      result: null,
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

    if (!age || !height || !weight || !gender) {
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
