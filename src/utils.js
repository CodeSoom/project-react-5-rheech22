export function get(key) {
  return (obj) => obj[key];
}

export function getActivityDescription(value) {
  const activityLevel = parseInt(value, 10);

  const levelComments = {
    1: '운동 거의 안함, 주로 앉아서 앉아서 일하거나 재택 근무로 활동량 매우 적음',
    2: '주 1-2회 운동, 혹은 서있거나 약간의 활동이 동반되는 일을 하는 경우',
    3: '주 3-5회 운동, 혹은 주로 서있거나 지속적인 활동이 동반되는 일을 하는 경우',
    4: '주 6-7회 운동, 혹은 주로 무거운 것을 들거나 육체적으로 고된 일을 하는 경우',
    5: '매일 2회 운동, 활동량과 에너지 소모가 매우 많은 경우 (예: 운동선수)',
  };

  return levelComments[activityLevel];
}

export function getGoalNumber(value) {
  const goalNumbers = {
    감량: 0.8,
    유지: 1,
    증량: 1.2,
  };

  return goalNumbers[value];
}

export function getGoalText(value) {
  const goalText = {
    0.8: '감량',
    1: '유지',
    1.2: '증량',
  };

  return goalText[value];
}

export function getCalories({
  gender, weight,
  height, age,
  activityLevel, goalNumber,
}) {
  const correction = gender === '남' ? 5 : -161;
  const equation = (10 * weight) + (6.25 * height) - (5 * age);
  const bmr = Math.round(equation + correction);

  const activityNumbers = [1.2, 1.375, 1.55, 1.725, 1.9];

  const tdee = Math.round(bmr * activityNumbers[activityLevel - 1]);

  const result = Math.round(tdee * goalNumber);

  return { bmr, tdee, result };
}

export function checkGender({ gender, text }) {
  return gender === text;
}

export function getMacros({ name, value }) {
  const macroFunctions = {
    highCarbs: (c) => ({
      carbs: Math.round((c * 0.5) / 4),
      protein: Math.round((c * 0.3) / 4),
      fats: Math.round((c * 0.2) / 9),
    }),
    lowCarbs: (c) => ({
      carbs: Math.round((c * 0.4) / 4),
      protein: Math.round((c * 0.4) / 4),
      fats: Math.round((c * 0.2) / 9),
    }),
    highFats: (c) => ({
      carbs: Math.round((c * 0.2) / 4),
      protein: Math.round((c * 0.2) / 4),
      fats: Math.round((c * 0.6) / 9),
    }),
  };
  return macroFunctions[name](value);
}

export function getDiaryMacro({ calories, value }) {
  const c = parseInt(value[0], 10);
  const p = parseInt(value[1], 10);
  const f = parseInt(value[2], 10);

  const carbs = Math.round((calories * 0.1 * c) / 4);
  const proteins = Math.round((calories * 0.1 * p) / 4);
  const fats = Math.round((calories * 0.1 * f) / 9);

  return { carbs, proteins, fats };
}
