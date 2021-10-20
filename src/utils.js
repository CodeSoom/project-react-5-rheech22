export function get(key) {
  return (obj) => obj[key];
}

export function getActivityDescription(value) {
  const activityLevel = parseInt(value, 10);

  const levelComments = {
    1: '주 1-2회 운동, 혹은 서있거나 약간의 활동이 동반되는 일을 하는 경우',
    2: '주 3-5회 운동, 혹은 주로 서있거나 지속적인 활동이 동반되는 일을 하는 경우',
    3: '주 6-7회 운동, 혹은 주로 무거운 것을 들거나 육체적으로 고된 일을 하는 경우',
    4: '매일 2회 운동, 활동량과 에너지 소모가 매우 많은 경우 (예: 운동선수)',
    5: '운동 거의 안함, 주로 앉아서 앉아서 일하거나 재택 근무로 활동량 매우 적음',
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

export function getCalories({
  gender, weight, height, age, activityLevel, goalNumber,
}) {
  const correction = gender === 'male' ? 5 : -161;
  const equation = (10 * weight) + (6.25 * height) - (5 * age);
  const bmr = Math.round(equation + correction);

  const activityNumbers = [1.2, 1.375, 1.55, 1.725, 1.9];

  const tdee = Math.round(bmr * activityNumbers[activityLevel - 1]);

  const result = Math.round(tdee * goalNumber);

  return { bmr, tdee, result };
}