import { createSlice } from '@reduxjs/toolkit';

const { actions, reducer } = createSlice({
  name: 'application',
  initialState: {
    bodyStats: {
      male: false,
      female: false,
      age: '',
      height: '',
      weight: '',
      activity: '1.2',
    },
    calories: {
      bmr: null,
      tdee: null,
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
    setCalories(state, { payload: { bmr, tdee } }) {
      return {
        ...state,
        calories: {
          ...state.calories,
          bmr,
          tdee,
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
        male,
        age,
        height,
        weight,
        activity,
      },
    } = getState();

    const equation = (10 * weight) + (6.25 * height) - (5 * age);

    if (male) {
      const bmr = equation + 5;
      const tdee = bmr * activity;
      dispatch(setCalories({ bmr, tdee }));
      return;
    }

    const bmr = equation - 161;
    const tdee = bmr * activity;
    dispatch(setCalories({ bmr, tdee }));
  };
}

export default reducer;
