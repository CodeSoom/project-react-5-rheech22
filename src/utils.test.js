import {
  get,
  getActivityDescription,
  getGoalNumber,
  getGoalText,
  getCalories,
  checkGender,
} from './utils';

test('get', () => {
  const state = {
    calories: 1800,
  };

  const f = get('calories');
  const g = get('energy');

  expect(f(state)).toBe(1800);
  expect(g(state)).toBeUndefined();
});

test('getActivityDescription', () => {
  const level1 = '운동 거의 안함, 주로 앉아서 앉아서 일하거나 재택 근무로 활동량 매우 적음';

  expect(getActivityDescription(1)).toBe(level1);

  const level2 = '주 1-2회 운동, 혹은 서있거나 약간의 활동이 동반되는 일을 하는 경우';

  expect(getActivityDescription(2)).toBe(level2);
});

test('getGoalNumber', () => {
  expect(getGoalNumber('감량')).toBe(0.8);
  expect(getGoalNumber('증량')).toBe(1.2);
  expect(getGoalNumber('유지')).toBe(1);

  expect(getGoalNumber('감소')).toBeUndefined();
});

test('getGoalText', () => {
  expect(getGoalText(0.8)).toBe('감량');
  expect(getGoalText(1.2)).toBe('증량');
  expect(getGoalText(1)).toBe('유지');

  expect(getGoalText(2)).toBeUndefined();
});

test('getCalories', () => {
  const params = {
    gender: '남',
    weight: 75,
    height: 180,
    age: 34,
    activityLevel: 1,
    goalNumber: 1.2,
  };

  const bmr = Math.round((10 * 75) + (6.25 * 180) - (5 * 34) + 5);
  const tdee = Math.round(bmr * 1.2);
  const result = Math.round(tdee * 1.2);

  expect(getCalories(params)).toEqual({ bmr, tdee, result });
});

test('checkGender', () => {
  expect(checkGender({
    gender: '남',
    text: '남',
  })).toBeTruthy();

  expect(checkGender({
    gender: '여',
    text: '남',
  })).toBeFalsy();
});
