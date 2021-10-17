import { createSlice } from '@reduxjs/toolkit';

import { activityDescription } from './utils';

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
    },
    calories: {
      bmr: null,
      tdee: null,
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
              description: activityDescription(value),
            },
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

    if (!age || !height || !weight || !gender) {
      return;
    }

    const correction = gender === 'male' ? 5 : -161;
    const equation = (10 * weight) + (6.25 * height) - (5 * age);
    const bmr = Math.round(equation + correction);

    const activityNumbers = [1.2, 1.375, 1.55, 1.725, 1.9];
    const { level } = activity;

    const tdee = Math.round(bmr * activityNumbers[level - 1]);

    dispatch(setCalories({ bmr, tdee }));
  };
}

export default reducer;
