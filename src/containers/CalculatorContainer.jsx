import { useDispatch, useSelector } from 'react-redux';

import Calculator from '../components/Calculator';

import { changeBodyStats, calculateCalories, setCalculatorMessage } from '../slice';

import { get } from '../utils';

export default function CalculatorContainer() {
  const dispatch = useDispatch();

  const {
    gender,
    age,
    height,
    weight,
    activity,
    goalNumber,
  } = useSelector(get('bodyStats'));

  const {
    bmr,
    tdee,
    result,
  } = useSelector(get('calories'));

  const calculatorMessage = useSelector(get('calculatorMessage'));

  const handleChangeBodyStats = ({ name, value }) => {
    dispatch(changeBodyStats({ name, value }));
  };

  const handleClickButton = () => {
    if (!bmr || !tdee || !result) {
      dispatch(setCalculatorMessage(
        '모든 항목을 입력해주세요',
      ));
    }
    dispatch(calculateCalories());
  };

  return (
    <article>
      <Calculator
        gender={gender}
        age={age}
        height={height}
        weight={weight}
        activity={activity}
        goalNumber={goalNumber}
        calculatorMessage={calculatorMessage}
        onChange={handleChangeBodyStats}
        onClick={handleClickButton}
      />
    </article>
  );
}
