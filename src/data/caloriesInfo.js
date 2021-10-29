const caloriesInfo = [
  {
    id: 1,
    title: 'BMR',
    subtitle: '(Bascal Metabolic Rate)',
    description: `기초대사량은 생명을 유지하는데 필요한 최소한의 에너지량입니다.
                  휴식 상태에 있거나 움직이지 않아도 소모되는 칼로리입니다.`,
  },
  {
    id: 2,
    title: 'TDEE',
    subtitle: '(Total Daily Energy Expenditure)',
    description: `TDEE는 하루에 쓰이는 총 에너지량입니다. BMR과 활동에 의해 소비되는 열량의 합계입니다.
                  체중을 유지하기 위해 섭취해야 하는 열량으로서 유지칼로리라고 불리기도 합니다.`,
  },
  {
    id: 3,
    title: '목표 칼로리',
    subtitle: '(이 수치를 참고하여 식단을 구성하세요)',
    description: `목표를 달성하기 위해 섭취해야 하는 칼로리입니다.
                  식이요법을 실천하면서 일정 기간 자신의 체중을 관찰하세요! 
                  목적에 부합되지 않는 변화가 있다면 칼로리를 조정해야 합니다.
                  이 수치는 공식에 의해 추정된 숫자라는 사실을 유념하세요.`,
  },
];

// (모든 수치는 Mifflin St. Jeor에 의해 수정된 Harris-Benedict 방정식에 기반하고 있습니다)

export default caloriesInfo;
