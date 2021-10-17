import { createSlice } from '@reduxjs/toolkit';

const { actions, reducer } = createSlice({
  name: 'application',
  initialState: {
    bodyStats: {
      gender: '',
      age: 0,
      height: 0,
      weight: 0,
      activity: 1.2,
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
        gender,
        age,
        height,
        weight,
        activity,
      },
    } = getState();

    if (!age || !height || !weight || !activity || !gender) {
      return;
    }

    const correction = gender === 'male' ? 5 : -161;
    const equation = (10 * weight) + (6.25 * height) - (5 * age);
    const bmr = Math.round(equation + correction);
    const tdee = Math.round(bmr * activity);

    dispatch(setCalories({ bmr, tdee }));
  };
}

export default reducer;
