export function get(key) {
  return (obj) => obj[key];
}

export function activityDescription(value) {
  const activityLevel = parseInt(value, 10);

  switch (activityLevel) {
  case 2:
    return '주 1-2회 운동, 혹은 서있거나 약간의 활동이 동반되는 일을 하는 경우';
  case 3:
    return '주 3-5회 운동, 혹은 주로 서있거나 지속적인 활동이 동반되는 일을 하는 경우';
  case 4:
    return '주 6-7회 운동, 혹은 주로 무거운 것을 들거나 육체적으로 고된 일을 하는 경우';
  case 5:
    return '매일 2회 운동, 활동량과 에너지 소모가 매우 많은 경우 (예: 운동선수)';
  default:
    return '운동 거의 안함, 주로 앉아서 앉아서 일하거나 재택 근무로 활동량 매우 적음';
  }
}
